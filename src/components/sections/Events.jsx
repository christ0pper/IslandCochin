import { events } from '../../data/site';
import SectionHead from '../ui/SectionHead';
import Reveal from '../ui/Reveal';
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
      </div>
    </section>
  );
}
