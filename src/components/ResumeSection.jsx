import React from 'react';
import { FileText, Download, Eye, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="section-padding relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Glow */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/10 top-1/2 right-1/4 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-amber-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                <FileText className="w-3.5 h-3.5" />
                <span>Official Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[var(--text-primary)]">
                Review & Download <span className="gradient-accent-text">Official Resume PDF</span>
              </h2>

              <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-2xl">
                Get an in-depth view of my computer science education, technical skill stack, full-stack chat app architecture, and internship experience at ROZA Solutions.
              </p>

              {/* Quick Resume Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>B.E. CS Undergraduate at GCE Srirangam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Full Stack Internship @ ROZA Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>React.js, Flask, WebRTC & Socket.IO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>PostgreSQL & Verified Certifications</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenResume}
                  className="btn-shine px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Eye className="w-5 h-5 fill-slate-950" />
                  View Resume
                </button>

                <a
                  href={personalInfo.resumePdf}
                  download="RIFATH_SHIFA_M_Resume.pdf"
                  className="px-7 py-3.5 rounded-xl glass-panel text-[var(--text-primary)] hover:text-amber-400 font-bold text-base hover:border-amber-500/50 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Download className="w-5 h-5 text-amber-500" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={onOpenResume}
                className="w-full max-w-xs aspect-3/4 rounded-2xl glass-panel p-6 border-amber-500/30 flex flex-col justify-between cursor-pointer group hover:scale-105 transition-all duration-300 shadow-2xl relative bg-slate-950/90"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                    <span className="text-xs font-bold text-amber-400">PDF DOCUMENT</span>
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-100 font-heading">
                      RIFATH SHIFA M
                    </h4>
                    <p className="text-[11px] text-amber-400 font-medium">
                      FULLSTACK WEB DEVELOPER
                    </p>
                    <div className="space-y-1.5 pt-2">
                      <div className="h-2 bg-slate-800 rounded w-full"></div>
                      <div className="h-2 bg-slate-800 rounded w-5/6"></div>
                      <div className="h-2 bg-amber-500/20 rounded w-4/6"></div>
                      <div className="h-2 bg-slate-800 rounded w-full"></div>
                      <div className="h-2 bg-slate-800 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>Click to Preview PDF</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
