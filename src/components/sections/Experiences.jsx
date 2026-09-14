import { useEffect, useRef } from 'react';
import { experiences } from '../../data/site';
import { useAllowMotion } from '../../hooks/useAllowMotion';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import Art from '../ui/Art';

export default function Experiences() {
  const allowMotion = useAllowMotion();
  const showVideo = Boolean(experiences.video) && allowMotion;
  const videoRef = useRef(null);

  // Below the fold: nothing downloads until the band nears the viewport, and
  // the loop pauses again once it scrolls away.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [showVideo]);

  return (
    <section className="band" id="experiences">
      <Art
        photo={experiences.photo}
        alt={experiences.artAlt}
        className="band__media"
      />

      {showVideo && (
        <video
          ref={videoRef}
          className="band__media band__video"
          muted
          loop
          playsInline
          preload="none"
          poster={experiences.poster}
          aria-hidden="true"
        >
          <source src={experiences.video} type="video/mp4" />
        </video>
      )}

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
