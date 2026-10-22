import React from 'react';
import { Figma, Palette, Layout, Sparkles, ExternalLink, ArrowRight, Eye, CheckCircle2, Search, ShoppingBag, Instagram, PlaySquare, Share2 } from 'lucide-react';
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
            
            <div className="lg:col-span-5 space-y-6">
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

              <div className="flex flex-wrap gap-2.5 pt-2">
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

            {/* Cook And Click Recipe UI Design (Exact Replica of Image 1 with 'Designed by RifathShifa') */}
            <div className="lg:col-span-7 relative flex justify-center w-full">
              <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-slate-300/80 dark:border-purple-500/30 bg-[#fbf7f0] text-slate-900 transition-all font-sans relative">
                
                {/* 1. Top Bar: Search input & Social Icons */}
                <div className="px-4 py-2 bg-[#e2e4e7] border-b border-slate-300 flex items-center justify-between gap-3 text-slate-700">
                  <div className="flex items-center gap-2 text-xs flex-1 max-w-xs">
                    <Search className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-[11px] sm:text-xs text-slate-700 font-medium">search for Recipes here</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-slate-700">
                    <ShoppingBag className="w-3.5 h-3.5 cursor-pointer hover:text-sky-600 transition-colors" />
                    <Instagram className="w-3.5 h-3.5 cursor-pointer hover:text-sky-600 transition-colors" />
                    <PlaySquare className="w-3.5 h-3.5 cursor-pointer hover:text-sky-600 transition-colors" />
                    {/* Pinterest 'P' icon */}
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-700 flex items-center justify-center text-[9px] font-black font-serif cursor-pointer hover:text-sky-600 hover:border-sky-600 transition-colors leading-none">
                      P
                    </div>
                    <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-sky-600 transition-colors" />
                  </div>
                </div>

                {/* 2. Vibrant Sky-Blue Navigation Bar */}
                <div className="bg-white/90 backdrop-blur-xs py-2 border-b border-slate-200/80 px-2 sm:px-4">
                  <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 gap-y-1 text-[11px] sm:text-xs font-black tracking-widest text-[#00a8e8]">
                    <span className="hover:text-sky-600 cursor-pointer">ABOUT</span>
                    <span className="hover:text-sky-600 cursor-pointer">RECIPES</span>
                    <span className="hover:text-sky-600 cursor-pointer">VIDEOS</span>
                    <span className="hover:text-sky-600 cursor-pointer">COOKBOOK</span>
                    <span className="hover:text-sky-600 cursor-pointer">PRESS</span>
                    <span className="hover:text-sky-600 cursor-pointer">CONTACT</span>
                  </div>
                </div>

                {/* Main Content Area with Subtle Recipe Background Texture */}
                <div className="relative p-3.5 sm:p-5 overflow-hidden">
                  {/* Subtle blurred food ambient background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none filter blur-xs"
                    style={{ backgroundImage: `url('/images/uiux/recipe_bg.jpg')` }}
                  ></div>

                  {/* 3. "Cook And Click" Decorative Header */}
                  <div className="relative text-center pb-2 pt-1">
                    <h4
                      className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-slate-950 inline-block drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
                      style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
                    >
                      Cook And Click
                    </h4>
                  </div>

                  {/* 4. Controls: Search, Dropdown Pills, and Sort By */}
                  <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-3 items-center text-xs mb-4">
                    {/* Left: SEARCH and eg., smoothie */}
                    <div className="sm:col-span-4 space-y-1">
                      <div className="font-extrabold flex items-center gap-1.5 text-xs text-slate-900 tracking-wide uppercase">
                        <span>SEARCH</span>
                        <Search className="w-3.5 h-3.5 text-slate-800" strokeWidth={2.5} />
                      </div>
                      <div className="rounded-lg bg-[#fef8ef] border border-[#e8d7c4] px-3 py-1.5 text-xs text-slate-600 shadow-inner">
                        eg., smoothie
                      </div>
                    </div>

                    {/* Middle: 4 Pill Dropdowns in 2x2 Grid */}
                    <div className="sm:col-span-5 grid grid-cols-2 gap-1.5 text-[10px] font-bold">
                      <div className="bg-white/95 border border-slate-300 rounded-full px-2.5 py-1 text-slate-800 flex items-center justify-between shadow-xs">
                        <span className="tracking-tight">INGREDIENT</span>
                        <span className="text-[8px] text-slate-600 ml-1">▼</span>
                      </div>
                      <div className="bg-white/95 border border-slate-300 rounded-full px-2.5 py-1 text-slate-800 flex items-center justify-between shadow-xs">
                        <span className="tracking-tight">SPECIAL DIET</span>
                        <span className="text-[8px] text-slate-600 ml-1">▼</span>
                      </div>
                      <div className="bg-white/95 border border-slate-300 rounded-full px-2.5 py-1 text-slate-800 flex items-center justify-between shadow-xs">
                        <span className="tracking-tight">DISH TYPE</span>
                        <span className="text-[8px] text-slate-600 ml-1">▼</span>
                      </div>
                      <div className="bg-white/95 border border-slate-300 rounded-full px-2.5 py-1 text-slate-800 flex items-center justify-between shadow-xs">
                        <span className="tracking-tight">FAVORITES</span>
                        <span className="text-[8px] text-slate-600 ml-1">▼</span>
                      </div>
                    </div>

                    {/* Right: SORT BY Radios */}
                    <div className="sm:col-span-3 space-y-1 text-[10px]">
                      <div className="font-extrabold text-[11px] uppercase text-slate-900 tracking-wide">
                        SORT BY
                      </div>
                      <div className="flex flex-col gap-1 text-slate-800 font-medium">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <span className="w-2.5 h-2.5 rounded-full border border-slate-500 block"></span>
                          <span className="text-[9px] uppercase font-semibold">MOST POPULAR</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-950 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-white"></span>
                          </span>
                          <span className="text-[9px] uppercase font-bold text-slate-950">NEWEST</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* 5. Two Recipe Cards (Strawberry Smoothie & Guava Smoothie) */}
                  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* Left: Strawberry Smoothie Card */}
                    <div className="flex flex-col">
                      <div className="bg-white/95 rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-md flex gap-2.5 items-center flex-1">
                        <div className="flex-1 space-y-1">
                          <p className="text-[10px] sm:text-[11px] leading-snug text-slate-800 font-normal">
                            A strawberry smoothie is a refreshing, creamy drink made by blending fresh strawberries with milk or yogurt for a healthy and delicious taste. 🍓🥛
                          </p>
                        </div>
                        <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-rose-50 border border-rose-100 shadow-inner">
                          <img
                            src="/images/uiux/strawberry_smoothie.jpg"
                            alt="Strawberry smoothie"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="text-center pt-2 font-bold text-xs sm:text-sm text-slate-900 font-sans tracking-wide">
                        strawberry smoothie
                      </div>
                    </div>

                    {/* Right: Guava Smoothie Card */}
                    <div className="flex flex-col">
                      <div className="bg-white/95 rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-md flex gap-2.5 items-center flex-1">
                        <div className="flex-1 space-y-1">
                          <p className="text-[10px] sm:text-[11px] leading-snug text-slate-800 font-normal">
                            A guava smoothie is a thick, refreshing drink made by blending ripe guava with milk or yogurt, rich in fiber and vitamin C. 🍐🥛
                          </p>
                        </div>
                        <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-emerald-50 border border-emerald-100 shadow-inner">
                          <img
                            src="/images/uiux/guava_smoothie.jpg"
                            alt="Guava smoothie"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="text-center pt-2 font-bold text-xs sm:text-sm text-slate-900 font-sans tracking-wide">
                        guava smoothie
                      </div>
                    </div>

                  </div>
                </div>

                {/* 6. Subtle, Elegant Attribution at Bottom: "Designed by RifathShifa" */}
                <div className="py-2.5 px-4 bg-slate-100/95 border-t border-slate-200 flex items-center justify-center">
                  <span className="text-[11px] sm:text-xs font-serif italic text-slate-600 tracking-wider font-medium">
                    Designed by RifathShifa
                  </span>
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
