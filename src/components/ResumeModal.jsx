import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Resume PDF viewer"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-panel w-full max-w-5xl h-[85vh] rounded-3xl border-amber-500/40 shadow-2xl flex flex-col overflow-hidden bg-[var(--bg-primary)]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[var(--card-border)] flex items-center justify-between bg-[var(--bg-secondary)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-[var(--text-primary)] leading-none">
                RIFATH SHIFA M — Resume PDF
              </h3>
              <span className="text-xs text-[var(--text-secondary)]">
                Full-Stack Developer & UI/UX Designer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePdf}
              download="RIFATH_SHIFA_M_Resume.pdf"
              className="btn-shine px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-amber-400 hover:border-amber-500/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer Body */}
        <div className="flex-1 w-full h-full bg-slate-900 relative">
          <iframe
            src={`${personalInfo.resumePdf}#toolbar=1&navpanes=0`}
            title="RIFATH SHIFA M Resume PDF"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[var(--card-border)] flex items-center justify-between text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)]">
          <span>Official Resume Document</span>
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:underline flex items-center gap-1 font-semibold"
          >
            Open in new tab
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
