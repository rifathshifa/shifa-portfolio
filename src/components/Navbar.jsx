import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles, Code2, RotateCcw } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onOpenResume, onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Hero is ~100vh: keep navbar dark while over the black video,
      // switch to theme paper only once past it. This removes the
      // black-bar-over-white-body contradiction in light mode.
      setPastHero(window.scrollY > window.innerHeight * 0.8);

      // ScrollSpy logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Over the dark hero video the navbar must stay dark in BOTH themes.
  // Only after scrolling past the hero does it adopt the theme paper.
  const useDarkChrome = !pastHero;
  const showThemeChrome = scrolled && pastHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showThemeChrome
          ? 'py-3 bg-[var(--navbar-bg)] backdrop-blur-md border-b border-[var(--card-border)] shadow-lg'
          : scrolled
            ? 'py-3 bg-slate-950/70 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 text-xl font-bold font-heading tracking-tight"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform">
            RS
          </div>
          <div className="flex flex-col">
            <span className="leading-none font-extrabold group-hover:text-amber-400 transition-colors" style={{ color: useDarkChrome || !showThemeChrome ? '#f8fafc' : 'var(--text-primary)' }}>
              RIFATH SHIFA
            </span>
            <span className="text-[10px] tracking-wider text-amber-500 font-semibold uppercase">
              Full-Stack & UI/UX
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — dark chrome over hero, theme vars after hero */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : showThemeChrome
                      ? 'text-[var(--text-secondary)] hover:text-amber-500 hover:bg-amber-500/5'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Theme Toggle & Resume Button) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-xl border transition-all hover:scale-105 ${
              showThemeChrome
                ? 'glass-panel text-amber-500 hover:text-amber-400'
                : 'bg-white/10 border-white/15 text-amber-400 hover:text-amber-300 backdrop-blur-md'
            }`}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 animate-pulse-slow" /> : <Moon className="w-5 h-5" />}
          </button>

          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              aria-label="Replay intro animation"
              title="Replay Intro"
              className={`p-2.5 rounded-xl border transition-all ${
                showThemeChrome
                  ? 'glass-panel text-[var(--text-secondary)] hover:text-amber-500 hover:border-amber-500/40'
                  : 'bg-white/10 border-white/15 text-slate-300 hover:text-amber-400 hover:bg-white/15 backdrop-blur-md'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onOpenResume}
            className="btn-shine px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-md hover:shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            Resume
          </button>
        </div>

        {/* Mobile controls & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              aria-label="Replay intro animation"
              title="Replay Intro"
              className={`p-2 rounded-xl border ${
                showThemeChrome
                  ? 'glass-panel text-amber-500'
                  : 'bg-white/10 border-white/15 text-amber-400 backdrop-blur-md'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-xl border ${
              showThemeChrome
                ? 'glass-panel text-amber-500'
                : 'bg-white/10 border-white/15 text-amber-400 backdrop-blur-md'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className={`p-2 rounded-xl border focus:outline-none ${
              showThemeChrome
                ? 'glass-panel text-amber-500'
                : 'bg-white/10 border-white/15 text-amber-400 backdrop-blur-md'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-[var(--card-border)] animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-amber-500 bg-amber-500/10 font-bold'
                      : 'text-[var(--text-primary)] hover:bg-amber-500/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-500"></span>}
                </a>
              );
            })}
            <div className="pt-4 border-t border-[var(--card-border)] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                View Resume PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
