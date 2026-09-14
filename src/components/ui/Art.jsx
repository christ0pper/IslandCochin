import { useState } from 'react';

/**
 * An image slot. Until the photo arrives it shows a neutral off-white
 * placeholder with a soft shimmer; the photo then fades in over it.
 *   <Art photo="/img/hero.jpg" alt="…" />
 *
 * The photo is a child <img> rather than a CSS background so it can carry
 * loading / fetchpriority / sizes. `priority` marks an above-the-fold slot
 * (the hero); everything else lazy-loads.
 * Add `srcSet` here once derivative widths are generated for /public/img.
 */
export default function Art({ photo, alt, className = '', priority = false, sizes, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const classes = ['art', loaded && 'is-loaded', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {photo && (
        <img
          // a cached photo can finish before React attaches onLoad, so check on mount too
          ref={(node) => {
            if (node?.complete && node.naturalWidth) setLoaded(true);
          }}
          className="art__img"
          src={photo}
          alt={alt || ''}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          // React 18 doesn't know the camelCase prop yet; the lowercase attribute passes straight through
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          // a failed photo shouldn't leave the slot shimmering forever
          onError={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
