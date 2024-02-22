import React, { useEffect, useRef, useState } from 'react';

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
    <div>
      <video ref={videoRef} autoPlay muted loop className="flex-1 rounded-lg" loading="lazy">
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
