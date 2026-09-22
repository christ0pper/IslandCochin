import { renderToString } from 'react-dom/server';
import App from './App';
import { structuredData } from './data/structuredData';

/**
 * Build-time rendering. scripts/prerender.mjs calls these and writes the
 * result into dist/index.html, so the shipped page carries its own content
 * for anything that doesn't run JavaScript — crawlers, AI assistants, link
 * previews, and a visitor whose script fails to load.
 */
export function render() {
  return renderToString(<App />);
}

// the JSON escape for '<', so no string in the data can close the <script> tag early
const LT = String.fromCharCode(92) + 'u003c';

export function jsonLd() {
  return JSON.stringify(structuredData()).replace(/</g, LT);
}
