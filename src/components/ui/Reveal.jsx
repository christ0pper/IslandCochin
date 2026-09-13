import { useReveal } from '../../hooks/useReveal';

/**
 * Wraps children in a scroll-reveal. `as` picks the rendered tag so headings
 * stay semantic: <Reveal as="h2" className="h2">…</Reveal>
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, visible] = useReveal(delay);
  const classes = ['reveal', visible ? 'in' : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
