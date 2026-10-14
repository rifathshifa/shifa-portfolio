import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowDown, Eye, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[var(--bg-primary)]">
      
      {/* FULL-HEIGHT BACKGROUND VIDEO WITH PRECISE POSITIONING TO KEEP FACE CLEAR */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {!reduceMotion ? (
          <video
            ref={videoRef}
            src={personalInfo.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/novachat.jpg"
            className="w-full h-full object-cover object-[75%_center] sm:object-[80%_center] scale-105 transform transition-transform duration-1000"
          />
        ) : (
          <img
            src="/images/novachat.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[75%_center]"
          />
        )}

        {/* Directional Overlay: Dark on the Left (for text readability), Transparent on the Right (keeping face open & clear) */}
        {/* Top Dark Overlay for Navigation Bar */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none"></div>

        {/* Left-to-Right Gradient Mask (Heavy dark on left for text, completely clear on right for face) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 sm:via-slate-950/65 to-transparent pointer-events-none"></div>

        {/* Bottom Blend Gradient into About Section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg-secondary)] via-slate-950/70 to-transparent pointer-events-none"></div>

        {/* Subtle Ambient Sunlight Glow on Left */}
        <div className="ambient-glow w-[500px] h-[500px] bg-amber-500/10 top-1/2 left-10 -translate-y-1/2 pointer-events-none"></div>
      </div>

      {/* FOREGROUND CONTENT: LEFT-ALIGNED HERO PANEL (KEEPING RIGHT SIDE CLEAR FOR FACE) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Seamless Transparent Content over Background Video */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            <div className="space-y-6 animate-fadeIn">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Full-Stack & UI/UX Specialist</span>
              </div>

              {/* Name & Role */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
                  {personalInfo.name}
                </h1>
                <span className="gradient-accent-text block text-2xl sm:text-3xl font-bold tracking-tight">
                  {personalInfo.role}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-serif italic text-amber-300/90 font-medium">
                “{personalInfo.tagline}”
              </p>

              {/* Concise Bio */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Crafting end-to-end web applications with React.js, Flask, PostgreSQL, WebSocket, and WebRTC — seamlessly combining technical engineering with elegant UI/UX design.
              </p>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['React.js', 'Flask', 'WebRTC', 'Socket.IO', 'PostgreSQL', 'Figma'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="btn-shine px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <Eye className="w-5 h-5 fill-slate-950" />
                  View My Work
                </a>

                <button
                  onClick={onOpenResume}
                  className="px-7 py-3.5 rounded-xl glass-panel text-white hover:text-amber-400 hover:border-amber-500/50 font-bold text-sm sm:text-base hover:-translate-y-0.5 transition-all flex items-center gap-2 bg-slate-900/80"
                >
                  <FileText className="w-5 h-5 text-amber-400" />
                  View Resume
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Empty space so the video's subject/face remains 100% visible & unobstructed */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6"></div>

        </div>
      </div>

      {/* FLOATING VIDEO CONTROLS WIDGET (BOTTOM RIGHT) */}
      {!reduceMotion && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-lg"
          title={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-400" />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-lg"
          title={isMuted ? "Unmute video audio" : "Mute video audio"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        </div>
      )}

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down to About section"
          className="flex flex-col items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors group"
        >
          <span className="uppercase tracking-widest text-[10px]">Scroll Down</span>
          <div className="p-1.5 rounded-full glass-panel border-amber-500/30 text-amber-400 group-hover:translate-y-1 transition-transform">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
}
