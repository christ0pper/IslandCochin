import Reveal from './Reveal';
import Headline from './Headline';

/** The two-column section header used by Events, Food and Visit. */
export default function SectionHead({ eyebrow, titleLines, copy }) {
  return (
    <div className="section__head">
      <div>
        <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h2" className="h2" delay={80}>
          <Headline lines={titleLines} />
        </Reveal>
      </div>
      <Reveal as="p" className="copy copy--head" delay={160}>{copy}</Reveal>
    </div>
  );
}
