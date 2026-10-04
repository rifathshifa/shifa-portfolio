import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Glow */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/10 top-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Education & <span className="gradient-accent-text">Qualifications</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            My academic journey in Computer Science and Engineering with consistent performance.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-1.5 hover:border-amber-500/50 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-2 group-hover:text-amber-400 transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-amber-500/90 mb-4">
                  {edu.institution}
                </p>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--card-border)] flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider">
                  Academic Result
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-sm shadow-md">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
