import { story } from '../../data/site';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import Art from '../ui/Art';

export default function Story() {
  return (
    <section className="section" id="story">
      <div className="wrap story">
        <div className="story__body">
          <Reveal as="p" className="eyebrow">{story.eyebrow}</Reveal>
          <Reveal as="h2" className="h2" delay={80}>
            <Headline lines={story.titleLines} />
          </Reveal>
          {story.paragraphs.map((text, i) => (
            <Reveal as="p" className="copy story__para" key={i} delay={120 + i * 60}>
              {text}
            </Reveal>
          ))}

          <Reveal as="ol" className="timeline" delay={300}>
            {story.timeline.map((step) => (
              <li key={step.year}>
                <span className="timeline__year">{step.year}</span>
                <span className="timeline__text">{step.text}</span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="story__media" delay={120}>
          <Art
            variant={story.art}
            photo={story.photo}
            alt={story.artAlt}
            className="story__art"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </Reveal>
      </div>
    </section>
  );
}
