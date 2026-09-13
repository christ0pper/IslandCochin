/**
 * variant: 'solid' | 'line' | 'light' | 'ghost-light'
 * Renders an <a> when given href, otherwise a <button>.
 */
export default function Button({
  variant = 'solid',
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
