import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UIUXShowcase from './components/UIUXShowcase';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveIntro from './components/InteractiveIntro';
import AnimatedBackground from './components/AnimatedBackground';
import useReveal from './hooks/useReveal';

// Code-split modal so initial bundle is lighter
const ResumeModal = lazy(() => import('./components/ResumeModal'));

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('portfolio_theme');
        if (saved === 'dark' || saved === 'light') return saved;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          return 'light';
        }
      } catch (e) {}
    }
    return 'dark';
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Intro sequence state: plays cleanly when the website is opened or refreshed, respects reduced-motion
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        // Respect user's reduced-motion preference
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return true;
  });

  useReveal();

  // Clear any legacy storage flags that previously suppressed the animation on refresh
  useEffect(() => {
    try {
      sessionStorage.removeItem('portfolio_intro_seen');
      localStorage.removeItem('portfolio_intro_seen');
    } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('portfolio_theme', theme);
      } catch (e) {}
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [introKey, setIntroKey] = useState(0);

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem('portfolio_intro_seen');
    } catch (e) {}
    setIntroKey((prev) => prev + 1);
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Subtle Premium Animated Background - paused while intro is active to conserve CPU & battery */}
      <AnimatedBackground theme={theme} isPaused={showIntro} />

      {/* Interactive Fullscreen Intro Sequence */}
      {showIntro && (
        <InteractiveIntro
          key={introKey}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          isIntroActive={showIntro}
        />
        <About />
        <Skills />
        <Projects />
        <UIUXShowcase />
        <Experience />
        <Education />
        <Certifications />
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Viewer Modal (Lazy loaded on demand) */}
      {isResumeModalOpen && (
        <Suspense fallback={null}>
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
