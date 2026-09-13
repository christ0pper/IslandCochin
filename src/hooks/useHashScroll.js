import { useEffect } from 'react';

/**
 * A client-rendered page has no #section in the DOM when the browser first
 * tries to honour a URL hash, so landing on /#events used to leave you at the
 * top of the page. Re-run the jump once the sections actually exist.
 */
export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === '#top') return;

    // a malformed hash (#a b) is not a valid selector and throws
    let target = null;
    try {
      target = document.querySelector(hash);
    } catch {
      return;
    }
    if (!target) return;

    // after paint, so scroll-margin-top is already applied
    const id = requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
    return () => cancelAnimationFrame(id);
  }, []);
}
