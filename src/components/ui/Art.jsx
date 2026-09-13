/**
 * An image slot. Renders the CSS-painted placeholder for `variant`, and takes a
 * real photo through the --photo custom property with no CSS change:
 *   <Art variant="aerial" photo="/img/hero.jpg" />
 *
 * When a photo is supplied it renders as a child <img> rather than a background,
 * so it can carry loading / fetchpriority / sizes — a CSS background has none of
 * those levers. The painted gradient stays behind it as the placeholder.
 *
 * `priority` marks an above-the-fold slot (the hero); everything else lazy-loads.
 * Add `srcSet` here once derivative widths are generated for /public/img.
 */
export default function Art({
  variant,
  photo,
  alt,
  className = '',
  priority = false,
  sizes,
  ...rest
}) {
  const classes = ['art', `art--${variant}`, className].filter(Boolean).join(' ');
  const style = photo ? { '--photo': `url('${photo}')` } : undefined;

  if (photo) {
    return (
      <div className={classes} {...rest}>
        <img
          className="art__img"
          src={photo}
          alt={alt || ''}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={classes}
      style={style}
      role={alt ? 'img' : undefined}
      aria-label={alt}
      {...rest}
    />
  );
}
