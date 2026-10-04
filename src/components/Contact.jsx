import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background Glow */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/10 top-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)]">
            Let's Build Something <span className="gradient-accent-text">Extraordinary</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl">
            Interested in collaborating on full-stack web engineering, real-time messaging, or UI/UX design? Feel free to reach out.
          </p>
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl space-y-6 border-amber-500/30">
              <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider block">Email Address</span>
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider block">Phone</span>
                    <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider block">Location</span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                      Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[var(--card-border)]">
                <span className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider block mb-3">
                  Connect & Follow
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl glass-panel hover:border-amber-500/50 hover:text-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-amber-500" />
                    LinkedIn
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl glass-panel hover:border-amber-500/50 hover:text-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-amber-500" />
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-amber-500/30">
              <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                Fill out the form below and I'll respond promptly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-400 font-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Thank you for reaching out, {personalInfo.name} will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel text-sm text-[var(--text-primary)] focus:outline-none focus:border-amber-500 placeholder:text-[var(--text-muted)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel text-sm text-[var(--text-primary)] focus:outline-none focus:border-amber-500 placeholder:text-[var(--text-muted)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel text-sm text-[var(--text-primary)] focus:outline-none focus:border-amber-500 placeholder:text-[var(--text-muted)] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-shine w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="animate-spin w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full"></span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 fill-slate-950" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
