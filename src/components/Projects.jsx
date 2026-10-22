import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const isValidLiveUrl = (url) => {
    if (!url) return false;
    try {
      const u = new URL(url);
      if (u.protocol !== 'https:') return false;
      // Reject URL shorteners used as placeholders — replace with direct deploy URLs
      if (u.hostname.includes('lnkd.in') || u.hostname.includes('bit.ly')) return false;
      return true;
    } catch {
      return false;
    }
  };

  const isValidGithubUrl = (url) => {
    if (!url) return false;
    try {
      const u = new URL(url);
      if (!u.hostname.includes('github.com')) return false;
      // Profile root (e.g. /rifathshifa/) has no repo — hide button until specific repo is added
      const parts = u.pathname.split('/').filter(Boolean);
      return parts.length >= 2;
    } catch {
      return false;
    }
  };

  const categories = ['All', 'Full Stack', 'Frontend & React', 'UI/UX & Web', 'Web App', 'Games & Utilities'];

  const displayedProjects = projectsData.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const visibleProjects = showAll ? displayedProjects : displayedProjects.slice(0, 6);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background Glow */}
      <div className="ambient-glow w-[500px] h-[500px] bg-amber-500/10 top-10 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Production & <span className="gradient-accent-text">Creative Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Explore web applications, real-time messaging systems, and UI/UX prototypes crafted with technical precision.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(true);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'glass-panel text-[var(--text-secondary)] hover:text-amber-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:border-amber-500/50 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Project Image Showcase Container */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-amber-500/25 via-slate-900 to-slate-950 p-6 text-center">
                      <span className="text-3xl font-black font-heading text-amber-400">
                        {project.name.charAt(0)}
                      </span>
                      <span className="text-xs font-bold text-slate-300">{project.name}</span>
                      <span className="text-[10px] font-mono text-amber-500/80">Live demo verified ✓</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-semibold">
                    {project.category}
                  </div>

                  {/* Quick Action overlay button */}
                  {isValidLiveUrl(project.liveUrl) && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 p-2 rounded-xl bg-amber-500 text-slate-950 font-bold opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-md"
                      title="Open Live Demo"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{project.name}</span>
                  </h3>
                  
                  <p className="text-xs font-semibold text-amber-500">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[var(--card-border)]/50 mt-4 flex items-center justify-between gap-3">
                {isValidLiveUrl(project.liveUrl) ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                ) : (
                  <span className="px-4 py-2 rounded-xl text-xs font-bold text-[var(--text-muted)] border border-dashed border-[var(--card-border)]">
                    Demo on request
                  </span>
                )}

                {isValidGithubUrl(project.githubUrl) && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass-panel text-[var(--text-primary)] hover:text-amber-400 font-bold text-xs flex items-center gap-1.5 hover:border-amber-500/40 transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-amber-500" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All / Collapse Button */}
        {displayedProjects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-xl glass-panel text-amber-500 border-amber-500/40 font-bold text-sm hover:bg-amber-500/10 hover:border-amber-500 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>{showAll ? 'Show Featured Projects Only' : `View All Projects (${projectsData.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
