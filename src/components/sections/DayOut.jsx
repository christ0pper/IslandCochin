import { dayOut } from '../../data/site';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import Art from '../ui/Art';
import Button from '../ui/Button';
import { prefillBooking } from './BookingBar';

/** The Day Out Package: one photo beside everything the price covers. */
export default function DayOut() {
  return (
    <section className="section section--sand" id="dayout">
      <div className="wrap package">
        <Reveal className="package__media">
          <Art
            variant={dayOut.art}
            photo={dayOut.photo}
            alt={dayOut.artAlt}
            className="package__art"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </Reveal>

        <div className="package__body">
          <Reveal as="p" className="eyebrow">{dayOut.eyebrow}</Reveal>
          <Reveal as="h2" className="h2" delay={80}>
            <Headline lines={dayOut.titleLines} />
          </Reveal>
          <Reveal as="p" className="copy package__copy" delay={160}>{dayOut.copy}</Reveal>

          <Reveal delay={200}>
            <dl className="facts">
              {dayOut.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="label">Included</h3>
            <ul className="ticks">
              {dayOut.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="package__extra">
              <span className="label">At extra cost</span> {dayOut.addOns.join(' · ')}
            </p>
            <p className="package__custom">{dayOut.customNote}</p>

            <Button
              variant="solid"
              href="#book"
              aria-label={`${dayOut.ctaLabel} for the ${dayOut.eyebrow}`}
              onClick={(event) => {
                event.preventDefault();
                prefillBooking(dayOut.bookingType);
              }}
            >
              {dayOut.ctaLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
