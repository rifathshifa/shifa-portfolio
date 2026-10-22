import React, { useEffect, useRef, useState } from 'react';
import './AnimatedBackground.css';

/**
 * AnimatedBackground Component
 * 
 * Features:
 * - Ambient gradient orbs (soft lavender, pastel pink, and cream) with slow, fluid floating CSS keyframe motion.
 * - Tiny sparkling floating particles drifting slowly upwards with gentle sine oscillation on a lightweight Canvas.
 * - Gentle mouse-follow glow with smooth lerp interpolation.
 * - Low-opacity, non-intrusive backdrop ensuring all portfolio cards and typography remain 100% crisp.
 * - Seamless support for both Dark and Light Lavender + Cream themes.
 * - Responsive and performance-optimized (GPU-composited transforms, auto-pause on hidden tab, reduced motion support).
 */
export default function AnimatedBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const mouseGlowRef = useRef(null);
  const mousePos = useRef({
    currentX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    currentY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    targetX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    targetY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    active: false,
  });

  const isDark = theme === 'dark';

  // 1. Mouse Follow Glow with smooth lerp (pauses when idle or on touch devices)
  useEffect(() => {
    // Skip if coarse pointer (mobile / touch) or reduced motion preferred
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let animId = null;
    let isRunning = false;
    const lerpFactor = 0.08;

    const updateMouseGlow = () => {
      const pos = mousePos.current;
      const dx = pos.targetX - pos.currentX;
      const dy = pos.targetY - pos.currentY;

      pos.currentX += dx * lerpFactor;
      pos.currentY += dy * lerpFactor;

      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.transform = `translate3d(${pos.currentX}px, ${pos.currentY}px, 0)`;
        mouseGlowRef.current.style.opacity = pos.active ? (isDark ? '0.75' : '0.85') : '0.4';
      }

      // Keep running only while converging; stop when within 0.4px
      if (Math.abs(dx) > 0.4 || Math.abs(dy) > 0.4) {
        animId = requestAnimationFrame(updateMouseGlow);
      } else {
        isRunning = false;
      }
    };

    const onPointerMove = (e) => {
      mousePos.current.targetX = e.clientX;
      mousePos.current.targetY = e.clientY;
      mousePos.current.active = true;

      if (!isRunning && !document.hidden) {
        isRunning = true;
        animId = requestAnimationFrame(updateMouseGlow);
      }
    };

    const onPointerLeave = () => {
      mousePos.current.active = false;
      if (!isRunning && !document.hidden) {
        isRunning = true;
        animId = requestAnimationFrame(updateMouseGlow);
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
    };
  }, [isDark]);

  // 2. Tiny Floating Particles Canvas (pauses when offscreen / tab hidden / reduced motion)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const checkReducedMotion = () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (checkReducedMotion()) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Palette of delicate pastel particles
    const particleColorsDark = [
      'rgba(184, 161, 227, ', // Lavender
      'rgba(216, 200, 242, ', // Accent Lavender
      'rgba(244, 194, 215, ', // Pastel Pink
      'rgba(255, 249, 240, ', // Soft Cream
    ];

    const particleColorsLight = [
      'rgba(139, 107, 181, ', // Deeper Lavender
      'rgba(184, 161, 227, ', // Soft Lavender
      'rgba(244, 194, 215, ', // Pastel Pink
      'rgba(224, 200, 165, ', // Warm Cream
    ];

    // Lightweight particle count: 10 on mobile, 18 on desktop
    const particleCount = width < 768 ? 10 : 18;

    const createParticle = () => {
      const colors = isDark ? particleColorsDark : particleColorsLight;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.8,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.3 + 0.15,
        speedY: -(Math.random() * 0.22 + 0.1),
        speedX: (Math.random() - 0.5) * 0.1,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleOffset: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    };

    let particles = Array.from({ length: particleCount }, createParticle);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = width < 768 ? 10 : 18;
      particles = Array.from({ length: count }, createParticle);
    };

    window.addEventListener('resize', handleResize);

    let time = 0;
    let isLooping = false;

    const render = () => {
      if (document.hidden || checkReducedMotion()) {
        isLooping = false;
        return;
      }

      time += 1;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time * p.wobbleSpeed + p.wobbleOffset) * 0.15;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const alpha = p.baseAlpha * (0.75 + 0.25 * Math.sin(time * p.pulseSpeed + p.pulseOffset));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${alpha.toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!isLooping && !document.hidden && !checkReducedMotion()) {
        isLooping = true;
        animId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
        isLooping = false;
      } else {
        startLoop();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    startLoop();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isDark]);

  return (
    <div
      className="animated-bg-container"
      aria-hidden="true"
      style={{
        opacity: isDark ? 0.95 : 0.9,
      }}
    >
      {/* Orb 1: Soft Lavender (Top-Left) */}
      <div
        className="gradient-orb orb-lavender"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(184, 161, 227, 0.20) 0%, rgba(184, 161, 227, 0.06) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(184, 161, 227, 0.32) 0%, rgba(184, 161, 227, 0.10) 45%, transparent 70%)',
        }}
      />

      {/* Orb 2: Pastel Pink (Top-Right) */}
      <div
        className="gradient-orb orb-pink"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(244, 194, 215, 0.16) 0%, rgba(244, 194, 215, 0.04) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(244, 194, 215, 0.26) 0%, rgba(244, 194, 215, 0.08) 45%, transparent 70%)',
        }}
      />

      {/* Orb 3: Cream (Bottom-Left) */}
      <div
        className="gradient-orb orb-cream"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 249, 240, 0.13) 0%, rgba(255, 249, 240, 0.03) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(254, 240, 225, 0.40) 0%, rgba(254, 240, 225, 0.12) 45%, transparent 70%)',
        }}
      />

      {/* Orb 4: Soft Mauve-Lavender (Bottom-Right) */}
      <div
        className="gradient-orb orb-mauve"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(216, 200, 242, 0.16) 0%, rgba(216, 200, 242, 0.04) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(216, 200, 242, 0.25) 0%, rgba(216, 200, 242, 0.08) 45%, transparent 70%)',
        }}
      />

      {/* Gentle Mouse-Follow Glow Orb */}
      <div
        ref={mouseGlowRef}
        className="mouse-glow-orb"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(184, 161, 227, 0.18) 0%, rgba(244, 194, 215, 0.07) 35%, transparent 70%)'
            : 'radial-gradient(circle, rgba(184, 161, 227, 0.22) 0%, rgba(244, 194, 215, 0.09) 35%, transparent 70%)',
        }}
      />

      {/* Tiny Sparkling Floating Particles */}
      <canvas ref={canvasRef} className="particles-canvas" />
    </div>
  );
}
