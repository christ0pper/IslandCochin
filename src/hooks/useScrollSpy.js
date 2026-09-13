import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently occupying the middle of the viewport,
 * used to underline the matching link in the primary nav.
 */
export function useScrollSpy(ids = []) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!ids.length || !('IntersectionObserver' in window)) return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids.join('|')]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}
