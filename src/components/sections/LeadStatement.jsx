import { leadStatement } from '../../data/site';
import Reveal from '../ui/Reveal';

export default function LeadStatement() {
  return (
    <section className="lead" id="lead">
      <div className="wrap lead__in">
        <Reveal as="p" className="eyebrow">{leadStatement.eyebrow}</Reveal>
        <Reveal as="p" className="lead__text" delay={80}>{leadStatement.text}</Reveal>
      </div>
    </section>
  );
}
