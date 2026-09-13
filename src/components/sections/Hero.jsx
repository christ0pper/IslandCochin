import { hero } from '../../data/site';
import { useAllowMotion } from '../../hooks/useAllowMotion';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import Art from '../ui/Art';
import Button from '../ui/Button';

export default function Hero() {
  const allowMotion = useAllowMotion();
  const showVideo = Boolean(hero.video) && allowMotion;

  return (
    <section className="hero" id="top">
      <Art
        variant={hero.art}
        photo={hero.photo}
        alt={hero.artAlt}
        className="hero__media"
        priority
        sizes="100vw"
      />

      {/* Drops in on top of the placeholder art once hero.video is set in site.js */}
      {showVideo && (
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.poster}
        >
          {hero.videoMobile && (
            <source src={hero.videoMobile} type="video/mp4" media="(max-width: 900px)" />
          )}
          <source src={hero.video} type="video/mp4" />
        </video>
      )}

      <div className="hero__veil" aria-hidden="true" />

      <div className="wrap hero__in">
        <Reveal as="p" className="eyebrow eyebrow--light">{hero.eyebrow}</Reveal>
        <Reveal as="h1" className="hero__title" delay={80}>
          <Headline lines={hero.titleLines} emphasis={hero.emphasis} />
        </Reveal>
        <Reveal as="p" className="hero__lead" delay={160}>{hero.lead}</Reveal>
        <Reveal className="hero__acts" delay={240}>
          <Button variant="light" href="#stay">Explore the island</Button>
          <Button variant="ghost-light" href="#book">Check availability</Button>
        </Reveal>
      </div>
    </section>
  );
}
