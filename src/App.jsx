import React, { useState, useEffect } from 'react';
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
import ResumeModal from './components/ResumeModal';
import InteractiveIntro from './components/InteractiveIntro';
import AnimatedBackground from './components/AnimatedBackground';
import useReveal from './hooks/useReveal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('portfolio_intro_seen') === 'true') return false;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    }
    return true;
  });

  useReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Subtle Premium Animated Background (Lavender, Pastel Pink & Cream Orbs + Floating Particles + Mouse Glow) */}
      <AnimatedBackground theme={theme} />

      {/* Interactive Fullscreen Intro Sequence */}
      {showIntro && (
        <InteractiveIntro
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
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

      {/* Interactive Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
