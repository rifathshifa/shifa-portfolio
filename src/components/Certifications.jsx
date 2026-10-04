import React from 'react';
import { Award, Code2, Figma, Cpu, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Figma':
        return <Figma className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background Glow */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/10 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Professional <span className="gradient-accent-text">Certifications</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Industry & domain certifications validating full-stack engineering, algorithms, UI/UX, and Java fundamentals.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-2 hover:border-amber-500/50 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  {getIcon(cert.icon)}
                </div>

                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                    {cert.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--card-border)] space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Credential</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
