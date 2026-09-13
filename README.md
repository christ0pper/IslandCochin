# Island D Cochin — website

React + Vite site for Island D Cochin, a private backwater island on the national
waterway at Mulavukad, Kochi.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # -> dist/
npm run preview   # serve the production build
npm run screenshot  # desktop / full-page / mobile PNGs into .screenshots (dev server must be up)
```

## Structure

```
index.html                  Vite shell (fonts, #root)
vite.config.js
public/
  icon.png                  favicon / apple-touch-icon
  logo.webp, logo.png       brand mark (WebP + fallback)
  img/                      drop photos here      -> /img/name.jpg
  video/                    drop video here       -> /video/hero.mp4
src/
  main.jsx                  entry, mounts <App>
  App.jsx                   composes the page in order
  data/
    site.js                 ALL copy lives here
  hooks/
    useScrolled.js          body.scrolled -> sticky header state
    useReveal.js            IntersectionObserver fade-up
    useScrollSpy.js         active nav link
    useHashScroll.js        makes /#section deep links work in a SPA
  components/
    layout/
      Logo.jsx  UtilityBar.jsx  Header.jsx  Footer.jsx
    sections/
      Hero.jsx  BookingBar.jsx  LeadStatement.jsx  Stay.jsx
      Dining.jsx  Experiences.jsx  Events.jsx  Discover.jsx
      CallToAction.jsx
    ui/
      Art.jsx               image slot / placeholder
      Button.jsx            solid | line | light | ghost-light
      Card.jsx              image-over-text card
      Headline.jsx          multi-line heading
      Reveal.jsx            scroll-reveal wrapper
      SectionHead.jsx       two-column section header
  styles/
    index.css               imports the five below, in order
    tokens.css              :root palette + type + spacing
    base.css                resets, type primitives, .reveal
    ui.css                  buttons, .art placeholders, cards
    layout.css              utility bar, header, footer
    sections.css            hero, bookbar, lead, split, band, stats, cta
    responsive.css          all media queries (must load last)
scripts/screenshot.mjs      visual check (npm run screenshot)
static-preview/             the original hand-written HTML version, kept for reference
```

Three rules keep this tidy:

1. **Copy never lives in JSX.** Everything readable is in `src/data/site.js`.
2. **Styling stays global BEM-ish CSS**, not per-component modules, so the design
   can be re-skinned from `tokens.css` alone.
3. **`responsive.css` loads last.** Media queries there override everything.

## Design reference

Layout follows **hotelodisej.com** section for section:

| Hotel Odisej             | Island D Cochin            |
| ------------------------ | -------------------------- |
| Utility bar + book now   | Ferry note + book now       |
| Full-bleed aerial hero   | Aerial hero                 |
| Rooms & Suites (01–05)   | Stay & Camping (01–05)      |
| Dining Options (3 cards) | Dining (3 cards)            |
| Wellness band            | Experiences band            |
| —                        | Events & Weddings (new)     |
| Discover Mljet (2 cards) | Discover Kochi (2 cards)    |
| Green CTA + footer       | Blue CTA + navy footer      |

Only the layout language is borrowed. The palette is Island D Cochin's own
**white and blue**:

| Token          | Value     | Used for                                    |
| -------------- | --------- | ------------------------------------------- |
| `--forest`     | `#0b2540` | deepest navy — footer, utility bar, bookbar |
| `--olive`      | `#134a72` | mid navy — large display text               |
| `--brand`      | `#1a76ab` | primary blue — buttons, labels, links       |
| `--brand-soft` | `#5aa7cd` | hover states                                |
| `--sand`       | `#eef4f8` | pale blue-white section ground              |
| `--paper`      | `#ffffff` | white ground                                |

Variable names are held over from the first draft, so changing those six values
in `tokens.css` re-skins the whole site. Type is Cormorant Garamond (display)
over Jost (UI).

`Events & Weddings` is the one section with no counterpart on the reference site.
It is here because events are Island D's actual core business.

## Adding photos and video

Every image is a CSS-painted placeholder toned to the blue palette. To use a real
photo, put the file in `public/img/` and add a `photo` key in `src/data/site.js` —
no CSS or JSX changes:

```js
export const hero = {
  art: 'aerial',
  photo: '/img/hero.jpg',   // <- that's it
  ...
};
```

Shot list, in page order:

| Slot             | `art` variant | Where in site.js    | Suggested crop | Subject                          |
| ---------------- | ------------- | ------------------- | -------------- | -------------------------------- |
| Hero             | `aerial`      | `hero`              | 2400×1600      | Drone shot of the island         |
| Stay 01          | `tent`        | `stay.items[0]`     | 1400×1800      | Riverside tents at dusk          |
| Stay 02          | `room`        | `stay.items[1]`     | 1400×1800      | AC room interior                 |
| Stay 03          | `family`      | `stay.items[2]`     | 1400×1800      | Family room / verandah           |
| Stay 04          | `group`       | `stay.items[3]`     | 1400×1800      | Group camp, fire pit             |
| Stay 05          | `dayout`      | `stay.items[4]`     | 1400×1800      | Lawn / pool by day               |
| Dining 1         | `dining`      | `dining.items[0]`   | 1200×900       | Open dining lawn, sadya          |
| Dining 2         | `float`       | `dining.items[1]`   | 1200×900       | Floating deck at sunset          |
| Dining 3         | `fire`        | `dining.items[2]`   | 1200×900       | Campfire barbecue                |
| Experiences band | `water`       | `experiences`       | 2400×1400      | Boating on the backwater         |
| Discover 1       | `nets`        | `discover.items[0]` | 1600×1000      | Chinese fishing nets, Fort Kochi |
| Discover 2       | `palms`       | `discover.items[1]` | 1600×1000      | Backwater channel, Vypin         |

**Hero video.** Put the file at `public/video/hero.mp4`, then uncomment the two
lines in `hero` in `site.js`:

```js
video: '/video/hero.mp4',
poster: '/img/hero.jpg',
```

It renders autoplay/muted/loop over the placeholder art. Keep it under ~8 MB and
10–20 seconds — a slow drone push over the island or the ferry crossing suits the
layout.

## Content status

Grounded in published information about the venue:

- Private island at Mulavukad on the national waterway, near Vypin
- Free ferry from the mainland; car park on the Vaduthala / Don Bosco side
- Riverside tent camping, open dining, floating dining area, pool, DJ party hall
- Boating, bird watching, fishing, boat race, campfire
- AC rooms for overnight guests
- Capacity 1,000 guests · open lawn 800 (300 seated) · floating hall 450
- Parking 100+ cars, 300 two-wheelers, valet
- Wi-Fi, backup power, 24/7 CCTV security
- Mainland address: Pazhampilly Thomas Road, Don Bosco Road, Vaduthala,
  Ernakulam, Kochi, Kerala 682023

**Placeholders that need real values before launch** (all in `src/data/site.js`):

- `site.phone` / `site.phoneHref` — `+91 00000 00000`. The number on the
  event-listing sites belongs to a third-party event agency, not the venue, so it
  is deliberately not used here.
- `site.email` — `hello@islanddcochin.com` is a guess.
- `footer.social` — Instagram and WhatsApp are `#` (Facebook is the real page).
- `stay.items[*].title` — plausible product names built from the known
  facilities, not published names. Confirm with the owner.
- Prices are not shown anywhere yet (reported: from ₹3,000/night, events from
  ~₹45,000). Add once confirmed.
- `--brand` blue is an estimate; sample the real value from a logo or signage.

## Design & accessibility review

Reviewed against the **Web Interface Guidelines**
(`website/.agents/skills/web-design-guidelines`, source
`vercel-labs/web-interface-guidelines`) with a screenshot pass on the running app.
Fixed in this round:

| Fix | Why it mattered |
| --- | --- |
| Reveal animation is now additive (`.js-reveal` opt-in, `main.jsx`) | Sections were parked at `opacity: 0` awaiting an observer — anything that stopped it firing left the page blank, including print |
| `useHashScroll` hook | A client-rendered page has no `#events` in the DOM when the browser first honours the hash, so `/#events` silently dumped you at the top |
| `scroll-margin-top` on every `section[id]` | The fixed header covered the heading you jumped to |
| `a, a:visited { color: inherit }` | `a:visited` outranks `a`, so visited links fell through to Chrome's UA purple — visible in the utility bar |
| Hero headline `max-width` 16ch → 22ch + `text-wrap: balance` | Headline was breaking three ways with an orphan on line 2 |
| Hero `100svh` → `88svh` | A full-viewport opener pushed the page out of the first frame; the booking bar now peeks |
| `color-scheme: light`, `<meta name="theme-color">` | Native controls and scrollbars were being forced dark by the OS |
| `font-variant-numeric: tabular-nums` on stat figures | Those four numbers are read against each other |
| Stay list hover: `padding-left` → `transform: translateX` | Animating a layout property instead of the compositor |
| Hero video gated on `prefers-reduced-motion` | A muted decorative loop must not autoplay for someone who asked for less motion |
| Form `autocomplete` / `inputMode` / `spellCheck`, `<option>` background-color | Native `<select>` renders unreadable in Windows dark mode without an explicit pair |
| `touch-action: manipulation`, `-webkit-tap-highlight-color`, `env(safe-area-inset-*)` | Double-tap zoom delay; notch clearance on the full-bleed bars |
| `translate="no"` on the wordmark, non-breaking spaces in the phone number | Auto-translation garbling the brand; phone breaking across lines |

**Known limitation — the page is blank without JavaScript.** That is inherent to a
client-rendered SPA and is not fixed here: link-preview scrapers and any crawler
that does not execute JS get nothing. For a marketing site that matters. The fix
is prerendering (`vite-plugin-ssr` / `vite-react-ssg`, or moving to Next.js);
worth doing before launch.

**Deliberately not changed:** the `01`–`05` numbering on the stay list. The
guidelines reserve numbered markers for real sequences, and five parallel stay
options are not one — but the reference site numbers its rooms the same way and
matching it was the brief. Worth a decision before launch.

## Next steps

- Routing + interior pages (`/stay`, `/dining`, `/events`, `/gallery`, `/contact`)
- Wire `BookingBar`'s `onSubmit` to a real endpoint — it currently only logs
- Google Map embed for the island jetty and the mainland parking
- Malayalam language toggle (the reference site has HR/EN)
- Prerender / SSR so the page has content without JS (see limitation above)
- Open Graph image, sitemap
#   I s l a n d D C o c h i n  
 