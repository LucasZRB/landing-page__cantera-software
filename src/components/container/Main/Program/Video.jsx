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
    <div className='flex-1'>
      <TitleBar />
      <video ref={videoRef} autoPlay muted loop className="rounded-b-lg max-h-[90vh]" loading="lazy">
        <source
          src="https://www.canterasoft.com/static/media/video.b3b3efb8854058371083.mp4"
          type="video/mp4"
        />
        <track kind="description" src="descripcion_video_corto.vtt" />
      </video>
    </div>
  );
};

export { Video };
