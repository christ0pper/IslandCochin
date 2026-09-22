import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Opt into the scroll-reveal animation only now that JS is definitely running.
// Without this class every .reveal stays at its visible resting state, so a
// blocked script or a print job still shows the whole page.
document.documentElement.classList.add('js-reveal');

// The build prerenders the page into #root (scripts/prerender.mjs), so in
// production we attach to that markup instead of throwing it away and
// repainting. In dev the div is empty and we render from scratch.
const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
