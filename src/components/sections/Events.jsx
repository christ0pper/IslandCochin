import { events } from '../../data/site';
import SectionHead from '../ui/SectionHead';
import Reveal from '../ui/Reveal';
import Art from '../ui/Art';
import Button from '../ui/Button';

export default function Events() {
  return (
    <section className="section" id="events">
      <div className="wrap">
        <SectionHead
          eyebrow={events.eyebrow}
          titleLines={events.titleLines}
          copy={events.copy}
        />

        <div className="gallery">
          {events.gallery.map((shot, i) => (
            <Reveal as="figure" className="gallery__item" key={shot.photo} delay={i * 90}>
              <Art
                variant={shot.art}
                photo={shot.photo}
                alt={shot.alt}
                className="gallery__art"
                sizes="(max-width: 680px) 100vw, 50vw"
              />
              <figcaption>{shot.caption}</figcaption>
            </Reveal>
          ))}
        </div>

        <dl className="stats">
          {events.stats.map((stat, i) => (
            <Reveal className="stat" key={stat.label} delay={i * 80}>
              <dt>{stat.label}</dt>
              <dd>
                <span className="stat__value">{stat.value}</span>
                <span className="stat__note">{stat.note}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="notecard">
          <p>
            <strong>{events.note.lead}</strong> {events.note.body}
          </p>
          <Button variant="line" href={events.note.ctaHref}>
            {events.note.ctaLabel}
          </Button>
        </Reveal>

        <Reveal className="hosted">
          <h3 className="label">{events.hosted.heading}</h3>
          {events.hosted.groups.map((group) => (
            <div className="hosted__group" key={group.label}>
              <p className="hosted__kind">{group.label}</p>
              <ul className="hosted__names">
                {group.names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
