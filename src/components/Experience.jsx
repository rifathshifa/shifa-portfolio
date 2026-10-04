import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background Glow */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/10 bottom-0 left-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Industry <span className="gradient-accent-text">Internship & Impact</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Hands-on software development experience building real-time features and responsive interfaces.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl relative hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mt-1 font-semibold">
                    <span className="text-amber-400">{exp.company}</span>
                    <span className="flex items-center gap-1 text-[var(--text-muted)]">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 max-w-xs">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description & Bullet points */}
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Key Achievements & Responsibilities
                </h4>
                <ul className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
