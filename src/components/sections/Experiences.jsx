import { experiences } from '../../data/site';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import LoopVideo from '../ui/LoopVideo';

export default function Experiences() {
  return (
    <section className="band" id="experiences">
      <LoopVideo
        video={experiences.video}
        poster={experiences.poster}
        alt={experiences.artAlt}
        className="band__media"
        videoClassName="band__video"
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

        {experiences.notes?.length > 0 && (
          <Reveal as="ul" className="band__notes" delay={300}>
            {experiences.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
