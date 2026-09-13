import { callToAction } from '../../data/site';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="wrap cta__in">
        <Reveal as="p" className="eyebrow eyebrow--light">{callToAction.eyebrow}</Reveal>
        <Reveal as="h2" className="h2 h2--light" delay={80}>{callToAction.title}</Reveal>
        <Reveal delay={160}>
          <Button variant="light" href={callToAction.ctaHref}>{callToAction.ctaLabel}</Button>
        </Reveal>
      </div>
    </section>
  );
}
