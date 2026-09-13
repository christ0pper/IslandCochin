import Reveal from './Reveal';
import Art from './Art';

/** Image-over-text card used by the Dining grid. */
export default function Card({ art, artAlt, photo, title, copy, linkLabel, href, delay = 0 }) {
  return (
    <Reveal as="article" className="card" delay={delay}>
      <Art variant={art} photo={photo} alt={artAlt} className="card__art" />
      <h3>{title}</h3>
      <p>{copy}</p>
      {/* both, or the anchor renders without an href and drops out of tab order */}
      {linkLabel && href && (
        <a className="link" href={href}>
          {linkLabel}
        </a>
      )}
    </Reveal>
  );
}
