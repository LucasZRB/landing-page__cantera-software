import React, { useEffect, useRef, useState } from 'react';
import { TitleBar } from './TitleBar';

const Video = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (entry.intersectionRatio === 1) {
            video.play();
          }
        } else {
          setIsVisible(false);
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(video);

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <div className='grid justify-items-center' style={{ gridRow: 'span 3', gridColumn: 'span 1', gridTemplateRows: 'repeat(3, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <div className='flex flex-col' style={{ gridRow: 'span 3', gridColumn: 'span 3' }}>
        <TitleBar />
        <video ref={videoRef} autoPlay muted loop className="rounded-b-lg object-cover" loading="lazy" style={{ maxHeight: 'min(90vh, 22.341rem)' }}>
          <source
            src="./src/assets/video/canteraVideo.mp4"
            type="video/mp4"
          />
          <track kind="descriptions" src="short_video_description.vtt" />
        </video>
      </div>
    </div>
  );
};

export { Video };
