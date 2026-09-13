import { discover } from '../../data/site';
import SectionHead from '../ui/SectionHead';
import Card from '../ui/Card';

export default function Discover() {
  return (
    <section className="section section--sand" id="discover">
      <div className="wrap">
        <SectionHead
          eyebrow={discover.eyebrow}
          titleLines={discover.titleLines}
          copy={discover.copy}
        />
        <div className="cards cards--two">
          {discover.items.map((item, i) => (
            <Card key={item.id} {...item} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
