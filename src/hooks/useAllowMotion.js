import { useEffect, useState } from 'react';

/**
 * False until mounted, and false for anyone with prefers-reduced-motion set,
 * so decorative video loops never autoplay for someone who asked for less motion.
 */
export function useAllowMotion() {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAllowMotion(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return allowMotion;
}
