import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Figma, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const allSkills = skillsData.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      category: cat.category
    }))
  );

  const filteredSkills =
    activeTab === 'All'
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background glow */}
      <div className="ambient-glow w-80 h-80 bg-amber-500/10 bottom-0 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Skills & <span className="gradient-accent-text">Technologies</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            A comprehensive overview of my tech stack, frameworks, database systems, and design tools.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                  : 'glass-panel text-[var(--text-secondary)] hover:text-amber-400 hover:border-amber-500/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 hover:border-amber-500/40 transition-all duration-300 group"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {skill.tag}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold font-heading text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
