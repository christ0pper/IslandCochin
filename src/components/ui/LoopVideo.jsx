import { useEffect, useRef } from 'react';
import { useAllowMotion } from '../../hooks/useAllowMotion';
import Art from './Art';

/**
 * A silent decorative loop over its own poster frame.
 *
 * - Anyone who asked for less motion gets the still image alone.
 * - Nothing downloads until the clip nears the viewport, and it pauses again
 *   once it scrolls away, so a visitor who never reaches it never pays for it.
 */
export default function LoopVideo({
  video,
  videoMobile,
  poster,
  alt,
  className = '',
  videoClassName = '',
  sizes,
  priority = false,
}) {
  const allowMotion = useAllowMotion();
  const showVideo = Boolean(video) && allowMotion;
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showVideo]);

  return (
    <>
      <Art photo={poster} alt={alt} className={className} sizes={sizes} priority={priority} />

      {showVideo && (
        <video
          ref={videoRef}
          className={[className, videoClassName].filter(Boolean).join(' ')}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-hidden="true"
        >
          {videoMobile && (
            <source src={videoMobile} type="video/mp4" media="(max-width: 900px)" />
          )}
          <source src={video} type="video/mp4" />
        </video>
      )}
    </>
  );
}
