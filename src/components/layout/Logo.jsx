/**
 * Island mark + wordmark. The mark is the brand artwork rather than an inline
 * SVG, so it keeps its own colours instead of inheriting the header's — WebP
 * with a PNG fallback, because this is the one asset that must never fail to
 * render.
 */
export default function Logo({ className = '', href = '#top' }) {
  return (
    <a
      className={['brand', className].filter(Boolean).join(' ')}
      href={href}
      aria-label="Island D Cochin, home"
    >
      <picture className="brand__mark">
        <source srcSet="/logo.webp" type="image/webp" />
        <img src="/logo.png" alt="" width="228" height="320" decoding="async" />
      </picture>
      <span className="brand__type" translate="no">
        <span className="brand__name">Island D</span>
        <span className="brand__sub">Cochin</span>
      </span>
    </a>
  );
}
