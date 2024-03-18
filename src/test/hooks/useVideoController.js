import { useEffect } from 'react';

const useVideoController = (
  videoRef,
  rootMargin = '0px',
  isTrue = () => videoRef.current.play(),
  isFalse = () => videoRef.current.pause()
) => {
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
            isTrue();
          }
        } else {
          isFalse();
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

export { useVideoController };
