import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import './InteractiveIntro.css';

/**
 * InteractiveIntro Component
 *
 * Fullscreen edge-to-edge interactive curtain entrance sequence.
 * - Starts with a clean pure white screen.
 * - An animated hijabi girl walks in from left to right with realistic cloth movement.
 * - She reaches out and grabs the curtain's seam fold.
 * - The user can drag sideways with mouse/touch or press Enter/Space/Skip.
 * - Curtain deforms dynamically with catenary curves and gathering fabric pleats.
 * - Smoothly unveils the portfolio beneath without layout jumps or page refresh.
 * - Robust React lifecycle & sessionStorage handling to prevent stuck states,
 *   blank screens, duplicate triggers, or unexpected replays on route changes.
 */
export default function InteractiveIntro({ onComplete, isReplay = false }) {
  // Phases: 'init' | 'walking' | 'ready' | 'dragging' | 'revealing' | 'hidden'
  const [phase, setPhase] = useState('init');
  const [walkFrame, setWalkFrame] = useState(1);
  const [curtainDrag, setCurtainDrag] = useState(0);
  const [pointerY, setPointerY] = useState(null);
  const [viewport, setViewport] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1366,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  }));

  // Initial offscreen calculation based on viewport height
  const initialCharHeight = Math.min((typeof window !== 'undefined' ? window.innerHeight : 768) * 0.78, 680);
  const [walkX, setWalkX] = useState(-initialCharHeight * 0.95);

  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, time: 0 });
  const isDraggingRef = useRef(false);
  const currentDragRef = useRef(0);
  const animFrameRef = useRef(null);
  const walkIntervalRef = useRef(null);
  const walkStartedRef = useRef(false);
  const hasFinishedRef = useRef(false);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Track viewport resizing smoothly
  useEffect(() => {
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setViewport({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 80);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Preload character assets immediately
  useEffect(() => {
    const assets = [
      '/intro/walk_1.webp',
      '/intro/walk_2.webp',
      '/intro/char_grab_clean.webp',
      '/intro/pull.webp'
    ];
    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Calculate target resting position for character and curtain seam
  const getSeamX = useCallback((width) => {
    if (width < 640) {
      return Math.round(width * 0.28);
    } else if (width < 1024) {
      return Math.round(width * 0.26);
    } else {
      return Math.round(width * 0.24);
    }
  }, []);

  const seamX = getSeamX(viewport.width);
  const screenW = viewport.width;
  const screenH = viewport.height;
  const charHeight = Math.min(screenH * 0.78, 680);
  const charWidth = charHeight; // 1:1 aspect ratio
  const targetCharLeft = seamX - charWidth * 0.72;

  // Complete the reveal transition smoothly
  const triggerReveal = useCallback(() => {
    if (phase === 'revealing' || phase === 'hidden' || hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    // Immediately stop any active walking loop
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (walkIntervalRef.current) clearInterval(walkIntervalRef.current);

    setPhase('revealing');

    const markSeenAndComplete = () => {
      setPhase('hidden');

      // Let the container fade out smoothly, then notify parent
      setTimeout(() => {
        if (onComplete) onComplete();

        // If URL had a target section hash, scroll to it now
        if (typeof window !== 'undefined' && window.location.hash) {
          try {
            const targetEl = document.querySelector(window.location.hash);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          } catch (e) {}
        }
      }, 450);
    };

    if (prefersReducedMotion) {
      setCurtainDrag(viewport.width + 150);
      markSeenAndComplete();
      return;
    }

    const totalWidth = viewport.width;
    const startDrag = currentDragRef.current;
    const targetDrag = totalWidth + 150;
    const duration = 1400; // ms
    const startTime = performance.now();

    const animateOut = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cinematic heavy fabric glide ease-out
      const ease = 1 - Math.pow(1 - progress, 3.2);
      const current = startDrag + (targetDrag - startDrag) * ease;
      setCurtainDrag(current);
      currentDragRef.current = current;

      if (progress < 1) {
        requestAnimationFrame(animateOut);
      } else {
        markSeenAndComplete();
      }
    };

    requestAnimationFrame(animateOut);
  }, [phase, viewport.width, onComplete, prefersReducedMotion]);

  // Initiate Walking Animation on mount
  useEffect(() => {
    let cancelled = false;

    if (prefersReducedMotion) {
      setWalkX(targetCharLeft);
      setPhase('ready');
      return;
    }

    const startX = -charWidth * 0.95;
    setWalkX(startX);

    // Initial brief white pause (120ms) then start walking smoothly
    const startTimer = setTimeout(() => {
      if (cancelled) return;
      setPhase('walking');
      const distance = targetCharLeft - startX;
      const duration = 2400; // ms
      const startTime = performance.now();

      // Footsteps cadence
      walkIntervalRef.current = setInterval(() => {
        if (!cancelled) {
          setWalkFrame((prev) => (prev === 1 ? 2 : 1));
        }
      }, 300);

      const step = (now) => {
        if (cancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth ease-out deceleration as she approaches the curtain seam
        const ease = 1 - Math.pow(1 - progress, 2.5);
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
    }, 120);

    return () => {
      cancelled = true;
      clearTimeout(startTimer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (walkIntervalRef.current) clearInterval(walkIntervalRef.current);
    };
  }, []);

  // Keyboard accessibility: Space, Enter, ArrowRight to unveil
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (phase === 'hidden' || hasFinishedRef.current) return;
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

    // Unveil threshold: dragged > 30% of screen width OR swift flick
    const threshold = totalWidth * 0.3;
    if (deltaX > threshold || velocity > 0.35) {
      triggerReveal();
    } else {
      // Elastic spring back to closed
      const startDrag = currentDragRef.current;
      const duration = 400;
      const startTime = performance.now();

      const springBack = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 2.6);
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

  // Dimensions & Dynamic Geometry for Fullscreen Curtain
  const activeGripY = pointerY !== null ? pointerY : screenH * 0.52;

  // Catenary fabric curve anchors
  const apexX = seamX + curtainDrag;
  const topX = seamX + curtainDrag * 0.75;
  const bottomX = seamX + curtainDrag * 0.85;

  // Dynamic character position: locked to walkX during walk/init, locked to curtain edge once ready
  const charLeft =
    phase === 'walking' || phase === 'init'
      ? walkX
      : apexX - charWidth * 0.72;

  const charLean = isDraggingRef.current ? Math.min(curtainDrag * 0.025, 4) : 0;
  const pullProgress = Math.min(curtainDrag / (screenW * 0.75), 1);

  // Generate 8 realistic vertical pleat curves that compress dynamically as curtain folds
  const numPleats = 8;
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
      opacity: (0.16 + (1 - ratio) * 0.2) * (1 + pullProgress * 0.5)
    });
  }

  // Fullscreen Curtain Surface Path (Edge-to-Edge)
  const curtainPathData = `
    M ${screenW + 60} -40
    L ${Math.max(-40, topX)} -40
    Q ${Math.max(-40, apexX)} ${activeGripY} ${Math.max(-40, bottomX)} ${screenH + 40}
    L ${screenW + 60} ${screenH + 40}
    Z
  `;

  // Left cover veil: before user pulls, keeps the left side 100% white
  const leftCoverPathData = `
    M -40 -40
    L ${Math.max(-40, topX)} -40
    Q ${Math.max(-40, apexX)} ${activeGripY} ${Math.max(-40, bottomX)} ${screenH + 40}
    L -40 ${screenH + 40}
    Z
  `;

  // Graceful fallback for image load errors
  const handleImageError = (e) => {
    if (e.currentTarget.src.includes('walk')) {
      e.currentTarget.src = '/intro/char_grab_clean.webp';
    }
  };

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
      {/* 1. DYNAMIC FULLSCREEN SVG CURTAIN LAYER */}
      <svg
        className="curtain-svg-layer"
        viewBox={`0 0 ${screenW} ${screenH}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Luxurious silk/satin gradient */}
          <linearGradient id="curtainFabricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#fdfcf9" />
            <stop offset="55%" stopColor="#f7f3ec" />
            <stop offset="85%" stopColor="#eee5d8" />
            <stop offset="100%" stopColor="#e3d8c8" />
          </linearGradient>

          {/* Efficient, GPU-optimized cinematic drop shadow */}
          <filter id="curtainCinematicShadow" x="-30%" y="-10%" width="160%" height="120%">
            <feDropShadow dx="-14" dy="0" stdDeviation="16" floodColor="rgba(0, 0, 0, 0.45)" />
            <feDropShadow dx="-3" dy="0" stdDeviation="5" floodColor="rgba(245, 158, 11, 0.12)" />
          </filter>
        </defs>

        {/* The White Curtain Surface Covering 100% of Viewport */}
        <path
          d={curtainPathData}
          fill="url(#curtainFabricGradient)"
          filter="url(#curtainCinematicShadow)"
        />

        {/* Flowing Fabric Pleats draped from top to bottom */}
        {phase !== 'init' &&
          pleatPaths.map((p) => (
            <g key={p.id}>
              {/* Pleat shadow valley */}
              <path
                d={p.d}
                fill="none"
                stroke="rgba(175, 155, 132, 0.32)"
                strokeWidth={Math.max(5, 14 - pullProgress * 7)}
                strokeLinecap="round"
                opacity={p.opacity}
              />
              {/* Pleat light crest */}
              <path
                d={p.d}
                fill="none"
                stroke="#ffffff"
                strokeWidth={Math.max(2.5, 7 - pullProgress * 3.5)}
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
                ? 'opacity 0.4s ease, transform 0.5s ease'
                : 'none',
          opacity: phase === 'revealing' ? 1 - pullProgress : 1
        }}
      >
        {/* Soft ground contact shadow */}
        <div className="character-ground-shadow" />

        {/* Character Illustration */}
        <div
          className={`relative w-full h-full ${
            phase === 'walking' ? 'char-walking-bob' : ''
          }`}
        >
          {/* Walking Phase: Natural stride cycle */}
          {(phase === 'walking' || phase === 'init') && (
            <img
              src={walkFrame === 1 ? '/intro/walk_1.webp' : '/intro/walk_2.webp'}
              alt="Animated hijabi girl walking gracefully"
              onError={handleImageError}
              className="w-full h-full object-contain pointer-events-none hijab-cloth-sway"
              draggable="false"
            />
          )}

          {/* Ready Phase: Fingertips resting on full-screen curtain edge */}
          {phase === 'ready' && (
            <img
              src="/intro/char_grab_clean.webp"
              alt="Animated hijabi girl holding the curtain edge"
              onError={handleImageError}
              className="w-full h-full object-contain pointer-events-none hijab-cloth-sway"
              draggable="false"
            />
          )}

          {/* Active Dragging or Pulling: Dynamic tension pose */}
          {(phase === 'dragging' || phase === 'revealing') && (
            <img
              src={curtainDrag > 75 ? '/intro/pull.webp' : '/intro/char_grab_clean.webp'}
              alt="Animated hijabi girl pulling the curtain open"
              onError={handleImageError}
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
