import { useEffect } from 'react';

/**
 * Mirrors the static site: adds `scrolled` to <body> past a threshold, which
 * retracts the utility bar and turns the header solid. Body-level rather than
 * component state because both the header and the nav dropdown depend on it.
 */
export function useScrolled(threshold = 40) {
  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('scrolled');
    };
  }, [threshold]);
}
