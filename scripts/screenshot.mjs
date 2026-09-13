// Visual check for the design pass: desktop, full page and mobile.
// Requires the dev server (npm run dev) to be up on :5173.
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const out = process.argv[2] || '.screenshots';
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: out + '/top.png' });
// scroll through so reveals fire, then full page
await page.evaluate(async () => {
  // 400ms/step: the reveal stagger runs up to ~240ms behind the observer, and
  // a faster loop scrolls past sections before their timers fire, which reads
  // as blank bands in the full-page shot.
  for (let y = 0; y < document.body.scrollHeight; y += 400) {
    window.scrollTo(0, y); await new Promise(r => setTimeout(r, 400));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(900);
await page.screenshot({ path: out + '/full.png', fullPage: true });
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(500);
await page.screenshot({ path: out + '/mobile.png' });
const horiz = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
console.log('console errors:', errors.length ? errors : 'none');
console.log('mobile horizontal overflow:', horiz);
await browser.close();
