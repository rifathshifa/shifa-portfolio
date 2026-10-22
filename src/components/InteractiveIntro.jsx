import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import './InteractiveIntro.css';

/**
 * InteractiveIntro Component
 *
 * Fullscreen edge-to-edge interactive white curtain covering 100% of the viewport.
 * - Starts with a clean pure white screen and zero text.
 * - An animated hijabi girl walks in from left to right with realistic cloth movement.
 * - She reaches out and grabs the curtain's vertical fold/edge.
 * - The user drags with mouse or touch to pull the curtain sideways.
 * - Curtain deforms like real fabric (catenary curve, vertical pleats gathering, realistic drop shadow).
 * - Underneath, the existing portfolio is progressively unveiled.
 * - When dragged past threshold (>35%), smoothly completes reveal without page reload.
 * - Accessible keyboard navigation (Space / Enter / ArrowRight) and reduced motion support.
 */
export default function InteractiveIntro({ onComplete, isReplay = false }) {
  // Phases: 'init' | 'walking' | 'ready' | 'dragging' | 'revealing' | 'hidden'
  const [phase, setPhase] = useState('init');
  const [walkFrame, setWalkFrame] = useState(1);
  const [walkX, setWalkX] = useState(-340);
  const [curtainDrag, setCurtainDrag] = useState(0);
  const [pointerY, setPointerY] = useState(null);
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1366,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, time: 0 });
  const isDraggingRef = useRef(false);
  const currentDragRef = useRef(0);
  const animFrameRef = useRef(null);
  const walkIntervalRef = useRef(null);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Track viewport resizing
  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload character assets immediately
  useEffect(() => {
    const imagesToPreload = [
      '/intro/walk_1.webp',
      '/intro/walk_2.webp',
      '/intro/char_grab_clean.webp',
      '/intro/pull.webp'
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Calculate target resting position for character and curtain seam
  const getPositions = useCallback(() => {
    const w = viewport.width;
    if (w < 640) {
      // Mobile: seam at ~30% of screen width
      const seamX = Math.round(w * 0.28);
      // Character's fingertips in char_grab_clean are at ~72.6% of character width
      // On mobile, character width is ~min(78vh, 480px)
      return { seamX };
    } else if (w < 1024) {
      // Tablet: seam at ~28% of screen width
      const seamX = Math.round(w * 0.26);
      return { seamX };
    } else {
      // Desktop: seam at ~24% of screen width
      const seamX = Math.round(w * 0.24);
      return { seamX };
    }
  }, [viewport.width]);

  // Initiate Walking Animation
  useEffect(() => {
    const { seamX } = getPositions();
    const charWidth = Math.min(viewport.height * 0.78, 680);
    // Position where fingertips (72.6% of char width) touch seamX
    const targetCharLeft = seamX - charWidth * 0.72;

    if (prefersReducedMotion) {
      setWalkX(targetCharLeft);
      setPhase('ready');
      return;
    }

    // Pure white initial state (300ms)
    const initTimer = setTimeout(() => {
      setPhase('walking');
      const startX = -charWidth * 0.9;
      const distance = targetCharLeft - startX;
      const duration = 2500; // ms
      const startTime = performance.now();

      // Alternating footsteps cadence
      walkIntervalRef.current = setInterval(() => {
        setWalkFrame((prev) => (prev === 1 ? 2 : 1));
      }, 320);

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth ease-out deceleration as she approaches curtain
        const ease = 1 - Math.pow(1 - progress, 2.4);
        const currentX = startX + distance * ease;
        setWalkX(currentX);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          clearInterval(walkIntervalRef.current);
          setWalkX(targetCharLeft);
          setPhase('ready');
        }
      };

      animFrameRef.current = requestAnimationFrame(step);
    }, 300);

    return () => {
      clearTimeout(initTimer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (walkIntervalRef.current) clearInterval(walkIntervalRef.current);
    };
  }, [getPositions, prefersReducedMotion, viewport.height]);

  // Complete the reveal transition smoothly
  const triggerReveal = useCallback(() => {
    if (phase === 'revealing' || phase === 'hidden') return;
    setPhase('revealing');

    if (prefersReducedMotion) {
      setCurtainDrag(viewport.width + 150);
      setPhase('hidden');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('portfolio_intro_seen', 'true');
      }
      if (onComplete) onComplete();
      return;
    }

    const totalWidth = viewport.width;
    const startDrag = currentDragRef.current;
    const targetDrag = totalWidth + 150;
    // Slower, smooth, realistic and cinematic opening duration
    const duration = 1600;
    const startTime = performance.now();

    const animateOut = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth, cinematic ease-out curve simulating heavy fabric glide
      const ease = 1 - Math.pow(1 - progress, 3.4);
      const current = startDrag + (targetDrag - startDrag) * ease;
      setCurtainDrag(current);
      currentDragRef.current = current;

      if (progress < 1) {
        requestAnimationFrame(animateOut);
      } else {
        setPhase('hidden');
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('portfolio_intro_seen', 'true');
        }
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animateOut);
  }, [phase, viewport.width, onComplete, prefersReducedMotion]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (phase === 'hidden') return;
      if (
        e.code === 'Space' ||
        e.code === 'Enter' ||
        e.code === 'ArrowRight' ||
        e.code === 'KeyD'
      ) {
        e.preventDefault();
        triggerReveal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, triggerReveal]);

  // Mouse & Touch Pointer Handlers for Curtain Drag
  const handlePointerDown = (e) => {
    if (phase !== 'ready' && phase !== 'dragging') return;
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      time: performance.now()
    };
    setPhase('dragging');
    setPointerY(e.clientY);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    // Allow dragging to the right to open
    const pullAmount = Math.max(0, deltaX);
    currentDragRef.current = pullAmount;
    setCurtainDrag(pullAmount);
    setPointerY(e.clientY);
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    const totalWidth = viewport.width;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaTime = performance.now() - dragStartRef.current.time;
    const velocity = deltaX / Math.max(deltaTime, 1);

    // Reveal threshold: dragged > 32% of screen OR swift flick
    const threshold = totalWidth * 0.32;
    if (deltaX > threshold || velocity > 0.38) {
      triggerReveal();
    } else {
      // Elastic spring back to closed
      const startDrag = currentDragRef.current;
      const duration = 450;
      const startTime = performance.now();

      const springBack = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 2.5);
        const current = startDrag * (1 - ease);
        setCurtainDrag(current);
        currentDragRef.current = current;

        if (progress < 1) {
          requestAnimationFrame(springBack);
        } else {
          setCurtainDrag(0);
          currentDragRef.current = 0;
          setPhase('ready');
        }
      };

      requestAnimationFrame(springBack);
    }
  };

  // Dimensions & Dynamic Geometry for Fullscreen Curtain with ZERO Gaps
  const screenW = viewport.width;
  const screenH = viewport.height;
  const { seamX } = getPositions();

  const charHeight = Math.min(screenH * 0.78, 680);
  const charWidth = charHeight; // 1:1 aspect ratio
  const activeGripY = pointerY !== null ? pointerY : screenH * 0.52;

  // Catenary fabric curve anchors (zero gaps: extra 50px outside viewport)
  // When closed (curtainDrag = 0): the curtain covers from 0 to screenW with no gaps
  // When pulled (curtainDrag > 0): the curtain edge peels open to the right
  const apexX = seamX + curtainDrag;
  const topX = seamX + curtainDrag * 0.75;
  const bottomX = seamX + curtainDrag * 0.85;

  // Dynamic character position locked to the curtain edge
  const charLeft =
    phase === 'walking'
      ? walkX
      : apexX - charWidth * 0.72;

  const charLean = isDraggingRef.current ? Math.min(curtainDrag * 0.025, 4) : 0;
  const pullProgress = Math.min(curtainDrag / (screenW * 0.75), 1);

  // Generate 10 realistic vertical pleat curves that compress dynamically as curtain folds
  const numPleats = 10;
  const remainingWidth = Math.max(20, screenW - apexX);
  const pleatPaths = [];
  for (let i = 1; i <= numPleats; i++) {
    const ratio = i / (numPleats + 1);
    const pTop = topX + remainingWidth * ratio;
    const pApex = apexX + remainingWidth * ratio;
    const pBottom = bottomX + remainingWidth * ratio;
    pleatPaths.push({
      id: i,
      d: `M ${pTop} -20 Q ${pApex} ${activeGripY} ${pBottom} ${screenH + 20}`,
      opacity: (0.15 + (1 - ratio) * 0.22) * (1 + pullProgress * 0.6)
    });
  }

  // Fullscreen Curtain Surface Path (Edge-to-Edge: covers all 4 corners with -40px to +50px margin)
  // When closed, covers from left edge (0) to right edge (screenW)
  // When pulled, the left edge of this path is the curved drape (topX -> apexX -> bottomX)
  const curtainPathData = `
    M ${screenW + 60} -40
    L ${Math.max(-40, topX)} -40
    Q ${Math.max(-40, apexX)} ${activeGripY} ${Math.max(-40, bottomX)} ${screenH + 40}
    L ${screenW + 60} ${screenH + 40}
    Z
  `;

  // Left cover veil: before she pulls, keeps the left side 100% pure white
  // When pulling, it folds away smoothly in sync with the curtain
  const leftCoverPathData = `
    M -40 -40
    L ${Math.max(-40, topX)} -40
    Q ${Math.max(-40, apexX)} ${activeGripY} ${Math.max(-40, bottomX)} ${screenH + 40}
    L -40 ${screenH + 40}
    Z
  `;

  return (
    <div
      ref={containerRef}
      className={`intro-container ${phase === 'hidden' ? 'is-hidden' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        cursor:
          phase === 'ready'
            ? 'grab'
            : phase === 'dragging'
              ? 'grabbing'
              : 'default'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Rifath Shifa's Portfolio Intro"
    >
      {/* 1. DYNAMIC FULLSCREEN SVG CURTAIN LAYER (100% Viewport, Zero Gaps) */}
      <svg
        className="curtain-svg-layer"
        viewBox={`0 0 ${screenW} ${screenH}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Luxurious silk/satin gradient with realistic lighting */}
          <linearGradient id="curtainFabricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#fdfcf9" />
            <stop offset="55%" stopColor="#f7f3ec" />
            <stop offset="85%" stopColor="#eee5d8" />
            <stop offset="100%" stopColor="#e3d8c8" />
          </linearGradient>

          {/* Deep cinematic drop shadow cast from the pulled curtain onto portfolio */}
          <filter id="curtainCinematicShadow" x="-50%" y="-20%" width="200%" height="140%">
            <feDropShadow dx="-22" dy="0" stdDeviation="28" floodColor="rgba(0, 0, 0, 0.55)" />
            <feDropShadow dx="-8" dy="0" stdDeviation="12" floodColor="rgba(0, 0, 0, 0.35)" />
            <feDropShadow dx="-2" dy="0" stdDeviation="4" floodColor="rgba(245, 158, 11, 0.15)" />
          </filter>

          {/* Soft shadow for vertical pleat grooves */}
          <linearGradient id="pleatShadowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 148, 126, 0.45)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* The White Curtain Surface Covering 100% of Viewport */}
        <path
          d={curtainPathData}
          fill="url(#curtainFabricGradient)"
          filter="url(#curtainCinematicShadow)"
        />

        {/* Dynamic Flowing Fabric Pleats draped from top to bottom */}
        {phase !== 'init' &&
          pleatPaths.map((p) => (
            <g key={p.id}>
              {/* Pleat shadow valley */}
              <path
                d={p.d}
                fill="none"
                stroke="rgba(175, 155, 132, 0.32)"
                strokeWidth={Math.max(6, 16 - pullProgress * 8)}
                strokeLinecap="round"
                opacity={p.opacity}
              />
              {/* Pleat light crest */}
              <path
                d={p.d}
                fill="none"
                stroke="#ffffff"
                strokeWidth={Math.max(3, 8 - pullProgress * 4)}
                strokeLinecap="round"
                opacity={p.opacity * 0.85}
              />
            </g>
          ))}

        {/* Left White Veil: covers the left side before user begins dragging */}
        {curtainDrag === 0 && (
          <path d={leftCoverPathData} fill="#ffffff" />
        )}

        {/* Dynamic Hem Fold Line along the leading edge */}
        {phase !== 'init' && (
          <path
            d={`M ${topX} -40 Q ${apexX} ${activeGripY} ${bottomX} ${screenH + 40}`}
            fill="none"
            stroke="rgba(217, 119, 6, 0.45)"
            strokeWidth={3 + pullProgress * 3}
            strokeLinecap="round"
          />
        )}
      </svg>

      {/* 2. ANIMATED HIJABI GIRL CHARACTER */}
      <div
        className="intro-character-wrapper"
        style={{
          left: `${charLeft}px`,
          height: `${charHeight}px`,
          transform: `rotate(${charLean}deg)`,
          transition:
            phase === 'dragging'
              ? 'none'
              : phase === 'revealing'
                ? 'opacity 0.5s ease, transform 0.6s ease'
                : 'none',
          opacity: phase === 'revealing' ? 1 - pullProgress : 1
        }}
      >
        {/* Soft ground contact shadow */}
        <div className="character-ground-shadow" />

        {/* Character Illustration with smooth state rendering */}
        <div
          className={`relative w-full h-full ${phase === 'walking' ? 'char-walking-bob' : ''
            }`}
        >
          {/* Walking Phase: Natural stride cycle */}
          {phase === 'walking' && (
            <img
              src={walkFrame === 1 ? '/intro/walk_1.webp' : '/intro/walk_2.webp'}
              alt="Animated hijabi girl walking gracefully"
              className="w-full h-full object-contain pointer-events-none hijab-cloth-sway"
              draggable="false"
            />
          )}

          {/* Ready Phase: Fingertips resting on full-screen curtain edge */}
          {(phase === 'ready' || phase === 'init') && (
            <img
              src="/intro/char_grab_clean.webp"
              alt="Animated hijabi girl holding the curtain edge"
              className="w-full h-full object-contain pointer-events-none hijab-cloth-sway"
              draggable="false"
            />
          )}

          {/* Active Dragging or Pulling: Dynamic tension pose */}
          {(phase === 'dragging' || phase === 'revealing') && (
            <img
              src={curtainDrag > 75 ? '/intro/pull.webp' : '/intro/char_grab_clean.webp'}
              alt="Animated hijabi girl pulling the curtain open"
              className="w-full h-full object-contain pointer-events-none"
              draggable="false"
            />
          )}
        </div>
      </div>

      {/* 3. TACTILE SEAM GRIP ZONE (Interactive pull point) */}
      {(phase === 'ready' || phase === 'dragging') && (
        <div
          className="curtain-grip-zone"
          style={{
            left: `${apexX}px`,
            top: `${activeGripY}px`
          }}
          aria-hidden="true"
        >
          <div className="grip-pulse-ring" />
          <div className="grip-pulse-ring" />
        </div>
      )}

      {/* 4. FLOATING INTERACTIVE TOOLTIP */}
      {phase === 'ready' && curtainDrag === 0 && (
        <div
          className="intro-tooltip"
          style={{
            left: `${apexX + 45}px`,
            top: `${activeGripY - 22}px`
          }}
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Drag curtain sideways to unveil</span>
          <ChevronRight className="w-4 h-4 text-amber-400 animate-pulse" />
        </div>
      )}

      {/* 5. ACCESSIBLE SKIP / ENTER PORTFOLIO BUTTON */}
      {phase !== 'hidden' && (
        <button
          type="button"
          onClick={triggerReveal}
          className="intro-skip-btn"
          aria-label="Skip intro animation and enter portfolio immediately"
        >
          <span>Enter Portfolio</span>
          <ArrowRight className="w-4 h-4 text-amber-500" />
        </button>
      )}

      {/* 6. KEYBOARD HINT (Desktop only) */}
      {phase === 'ready' && (
        <div className="intro-keyboard-hint hidden sm:flex">
          <span>Press</span>
          <kbd className="keyboard-key">Space</kbd>
          <span>or</span>
          <kbd className="keyboard-key">Enter</kbd>
          <span>to unveil</span>
        </div>
      )}
    </div>
  );
}
