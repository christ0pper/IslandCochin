import { experiences } from '../../data/site';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import Art from '../ui/Art';

export default function Experiences() {
  return (
    <section className="band" id="experiences">
      <Art
        variant={experiences.art}
        photo={experiences.photo}
        alt={experiences.artAlt}
        className="band__media"
      />
      <div className="band__veil" aria-hidden="true" />

      <div className="wrap band__in">
        <Reveal as="p" className="eyebrow eyebrow--light">{experiences.eyebrow}</Reveal>
        <Reveal as="h2" className="h2 h2--light" delay={80}>
          <Headline lines={experiences.titleLines} />
        </Reveal>
        <Reveal as="p" className="copy copy--light" delay={160}>{experiences.copy}</Reveal>

        <Reveal as="ul" className="chips" delay={240}>
          {experiences.chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
