import { callToAction, site } from '../../data/site';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="wrap cta__in">
        <Reveal as="p" className="eyebrow eyebrow--light">{callToAction.eyebrow}</Reveal>
        <Reveal as="h2" className="h2 h2--light" delay={80}>{callToAction.title}</Reveal>
        <Reveal as="p" className="cta__copy" delay={120}>{callToAction.copy}</Reveal>
        <Reveal className="cta__acts" delay={160}>
          <Button variant="light" href={site.whatsappHello} target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </Button>
          <Button variant="ghost-light" href={site.phoneHref}>
            Call {site.phone}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
