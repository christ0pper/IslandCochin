import { dining } from '../../data/site';
import SectionHead from '../ui/SectionHead';
import Card from '../ui/Card';

export default function Dining() {
  return (
    <section className="section section--sand" id="dining">
      <div className="wrap">
        <SectionHead
          eyebrow={dining.eyebrow}
          titleLines={dining.titleLines}
          copy={dining.copy}
        />
        <div className="cards">
          {dining.items.map((item, i) => (
            <Card key={item.id} {...item} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
