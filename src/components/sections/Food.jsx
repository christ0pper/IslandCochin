import { food } from '../../data/site';
import SectionHead from '../ui/SectionHead';
import Card from '../ui/Card';

export default function Food() {
  return (
    <section className="section section--sand" id="food">
      <div className="wrap">
        <SectionHead eyebrow={food.eyebrow} titleLines={food.titleLines} copy={food.copy} />
        <div className={food.items.length === 2 ? 'cards cards--two' : 'cards'}>
          {food.items.map((item, i) => (
            <Card key={item.id} {...item} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
