import { useEffect, useRef, useState } from 'react';

/**
 * Fades an element up the first time it enters the viewport.
 * Returns [ref, isVisible]. Falls back to visible when IntersectionObserver
 * is missing or the user prefers reduced motion.
 */
export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = setTimeout(() => setVisible(true), delay);
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return [ref, visible];
}
