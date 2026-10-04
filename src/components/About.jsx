import React from 'react';
import { User, Code2, Layout, Database, Sparkles, GraduationCap, Award, Mail, Languages, CheckCircle2, HeartHandshake, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlightCards = [
    {
      title: "Full-Stack Web Development",
      description: "Architecting end-to-end web applications with React.js frontend and Flask RESTful backends.",
      icon: Code2,
      badge: "Core Expertise"
    },
    {
      title: "Real-Time Systems & Media",
      description: "Building low-latency messaging, voice/video calling with WebSocket, Socket.IO, and WebRTC.",
      icon: Database,
      badge: "Advanced"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "Crafting intuitive, accessible user interfaces in Figma with high aesthetic polish.",
      icon: Layout,
      badge: "Design Studio"
    },
    {
      title: "Problem Solving & Systems",
      description: "Strong foundation in Data Structures, Algorithms, PostgreSQL databases, and clean software architecture.",
      icon: Sparkles,
      badge: "Engineering"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Decorative ambient background glows */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/10 top-0 right-0"></div>
      <div className="ambient-glow w-80 h-80 bg-orange-500/10 bottom-0 left-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Driven by Passion for <span className="gradient-accent-text">Craft & Innovation</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            A developer who bridges creative visual design with robust, scalable backend engineering.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Professional Profile Summary & Key Details */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl flex-1 flex flex-col justify-between relative border-amber-500/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-4">
                  <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                    Hello, I'm <span className="text-amber-500">{personalInfo.name}</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                    Full-Stack & UI/UX
                  </span>
                </div>
                
                {/* Profile Introduction */}
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                  {personalInfo.summary}
                </p>

                <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                  With a solid foundation in Computer Science and Engineering from Government College of Engineering Srirangam (Trichy), I specialize in building high-performance web applications, real-time communication tools, and human-centered design experiences.
                </p>
              </div>

              {/* Quick Info Grid for Education, CGPA, Email, Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[var(--card-border)]">
                {/* Education */}
                <div className="p-4 rounded-2xl bg-[var(--bg-primary)]/60 border border-[var(--card-border)] flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-bold block">Education</span>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] block">B.E. Computer Science</span>
                    <span className="text-[11px] text-amber-400 font-medium">GCE Srirangam, Trichy</span>
                  </div>
                </div>

                {/* CGPA */}
                <div className="p-4 rounded-2xl bg-[var(--bg-primary)]/60 border border-[var(--card-border)] flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-bold block">CGPA Score</span>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] block">8.42 / 10.0</span>
                    <span className="text-[11px] text-emerald-400 font-medium">High Academic Standing</span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-[var(--bg-primary)]/60 border border-[var(--card-border)] flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-bold block">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:text-amber-400 truncate block">
                      {personalInfo.email}
                    </a>
                    <span className="text-[11px] text-amber-400 font-medium">Available for Hiring</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="p-4 rounded-2xl bg-[var(--bg-primary)]/60 border border-[var(--card-border)] flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 flex-shrink-0">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-bold block">Languages</span>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] block">English & Tamil</span>
                    <span className="text-[11px] text-amber-400 font-medium">Fluent Communication</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: 4 Core Skills & Strengths Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-1.5 hover:border-amber-500/50 transition-all duration-300 group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {card.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-heading text-[var(--text-primary)] mb-2 group-hover:text-amber-400 transition-colors">
                      {card.title}
                    </h4>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[var(--card-border)] flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Key Portfolio Strengths</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
