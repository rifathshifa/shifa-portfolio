import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--card-border)] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-sm">
            RS
          </div>
          <div>
            <span className="font-bold font-heading text-sm text-[var(--text-primary)] block">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              {personalInfo.role}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs text-[var(--text-secondary)] italic font-serif">
          “{personalInfo.tagline}”
        </p>

        {/* Back to top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl glass-panel text-amber-500 hover:text-amber-400 hover:scale-110 transition-all"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
