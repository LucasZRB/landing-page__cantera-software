import { useEffect } from 'react';

const useVideoControler = (videoRef, rootMargin = '0px') => {
  useEffect(() => {
    const video = videoRef.current;
    const options = {
      root: null,
      rootMargin: rootMargin,
      threshold: 1
    };

    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio === 1) {
            video.play();
          }
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export { useVideoControler };
