import { visit } from '../../data/site';
import SectionHead from '../ui/SectionHead';
import Reveal from '../ui/Reveal';

/** Practical questions, grouped. Native <details> keeps them keyboard- and screen-reader-friendly. */
export default function Visit() {
  return (
    <section className="section section--sand" id="visit">
      <div className="wrap">
        <SectionHead eyebrow={visit.eyebrow} titleLines={visit.titleLines} copy={visit.copy} />

        <div className="faq">
          {visit.groups.map((group, i) => (
            <Reveal className="faq__group" key={group.heading} delay={i * 90}>
              <h3 className="label">{group.heading}</h3>
              {group.items.map((item) => (
                <details className="faq__item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
