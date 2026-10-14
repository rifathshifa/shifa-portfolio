import { useEffect } from 'react';

// Adds .is-visible to all .reveal elements on scroll. Respects reduced motion.
export default function useReveal() {
  useEffect(() => {
    // Auto-tag section headers so existing markup animates without per-file edits
    document.querySelectorAll('section .flex.flex-col.items-center.text-center').forEach((el) => {
      el.classList.add('reveal');
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
