import React from 'react';
import { Figma, Palette, Layout, Sparkles, ExternalLink, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function UIUXShowcase() {
  const designPrinciples = [
    {
      title: "User-Centered Wireframing",
      desc: "Creating high-clarity wireframes and user flow mapping prior to pixel-perfect design execution.",
      icon: Layout
    },
    {
      title: "Figma Design Systems",
      desc: "Architecting reusable component libraries, typography scale tokens, and consistent color palettes.",
      icon: Figma
    },
    {
      title: "Micro-Interactions & Motion",
      desc: "Designing intentional subtle motion, hover state transitions, and responsive feedback cues.",
      icon: Sparkles
    },
    {
      title: "Accessibility & Color Contrast",
      desc: "Ensuring WCAG AAA contrast compliance, readable font scaling, and inclusive web interactions.",
      icon: Palette
    }
  ];

  return (
    <section id="uiux" className="section-padding relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Radial Glow */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Figma className="w-3.5 h-3.5" />
            <span>UI/UX Design Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Creative Vision & <span className="gradient-accent-text">User Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Combining empathetic design thinking with modern Figma prototypes to deliver engaging, human-centered digital experiences.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Feature Hero Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 mb-12 border-amber-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Figma & Design Portfolio</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--text-primary)] leading-tight">
                Designing Interfaces That Tell a Story & Empower Users
              </h3>

              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                My UI/UX design workflow spans end-to-end product design: from initial low-fidelity wireframing and user journey mapping to high-fidelity Figma components, interactive prototype testing, and design-system handoff.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Canva', 'User Journeys'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20 hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <Figma className="w-5 h-5 fill-slate-950" />
                  View UI/UX Designs on LinkedIn
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Design Mockup Card Graphics */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-md aspect-4/3 rounded-2xl glass-panel p-6 border-amber-500/30 flex flex-col justify-between relative overflow-hidden bg-slate-950/80 shadow-2xl">
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400">Figma_DesignSystem.fig</span>
                </div>

                <div className="space-y-3 py-4">
                  <div className="h-4 bg-amber-500/20 rounded-md w-3/4 animate-pulse"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                      #F59E0B
                    </div>
                    <div className="h-16 rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                      #D97706
                    </div>
                    <div className="h-16 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-slate-300 font-bold text-xs">
                      #0B0D12
                    </div>
                  </div>
                  <div className="h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between px-3 text-xs text-amber-400">
                    <span>Component: PrimaryButton</span>
                    <span className="text-[10px] font-mono">State: Hover</span>
                  </div>
                </div>

                <div className="text-[10px] text-[var(--text-muted)] font-mono text-right">
                  Designed by RIFATH SHIFA M
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Design Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
