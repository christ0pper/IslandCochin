// Writes the rendered page and its schema.org data into dist/index.html.
// Runs after `vite build` and the SSR build — see package.json "build".
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist/index.html');
const server = resolve('dist-ssr/entry-server.js');

if (!existsSync(server)) {
  console.error('prerender: dist-ssr/entry-server.js is missing — run the SSR build first.');
  process.exit(1);
}

const { render, jsonLd } = await import(`file://${server}`);
const html = readFileSync(dist, 'utf8');

const markup = render();
const data = jsonLd();

if (!html.includes('<div id="root"></div>')) {
  console.error('prerender: could not find the empty root div in dist/index.html.');
  process.exit(1);
}

const out = html
  .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  // JSON-LD last in <head>, so a hand edit to the meta tags above never disturbs it
  .replace('</head>', `  <script type="application/ld+json">${data}</script>\n  </head>`);

writeFileSync(dist, out);

const kb = (s) => Math.round(Buffer.byteLength(s) / 1024);
console.log(`prerender: page content ${kb(markup)} kB, schema.org data ${kb(data)} kB`);
