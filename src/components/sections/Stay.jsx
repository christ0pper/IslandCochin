import { useState } from 'react';
import { stay } from '../../data/site';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import Art from '../ui/Art';
import Button from '../ui/Button';

/**
 * The numbered stay list drives the image panel beside it: hovering or
 * focusing an entry swaps the art and its caption.
 */
export default function Stay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stay.items[activeIndex];

  return (
    <section className="split" id="stay">
      <div className="split__media">
        <Art
          variant={active.art}
          photo={active.photo}
          alt={active.caption}
          key={active.id}
        />
        <span className="split__caption">{active.caption}</span>
      </div>

      <div className="split__body">
        <div className="split__head">
          <Reveal as="p" className="eyebrow">{stay.eyebrow}</Reveal>
          <Reveal as="h2" className="h2" delay={80}>
            <Headline lines={stay.titleLines} />
          </Reveal>
          <Reveal as="p" className="copy" delay={160}>{stay.copy}</Reveal>
          <Reveal delay={240}>
            <Button variant="line" href={stay.ctaHref}>{stay.ctaLabel}</Button>
          </Reveal>
        </div>

        <ol className="stack">
          {stay.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={i * 70}
              className={i === activeIndex ? 'stack__item is-active' : 'stack__item'}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
            >
              <a href="#contact">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="stack__num">{String(i + 1).padStart(2, '0')}</span>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
