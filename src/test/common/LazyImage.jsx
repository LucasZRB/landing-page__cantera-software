import React, { useEffect, useRef, useState } from 'react';
import { TbFaceIdError } from 'react-icons/tb';
import { SkImage } from '../common/skeletons/SkImage';

const LazyImage = ({
  src,
  alt = '',
  title = '',
  figureClass = 'size-full',
  imageClass = 'size-full',
  SuccessBackground = null,
  LoadingBackground = () => <SkImage />,
  ErrorBackground = () => <TbFaceIdError className='size-full' />
}) => {
  const imageRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(imageRef.current);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = err => {
    setError(err);
  };

  return (
    <figure className={`relative ${figureClass}`}>
      {!isImageLoaded && !error && LoadingBackground && (
        <div className="flex justify-center items-center size-full">
          <LoadingBackground />
        </div>
      )}
      {error && ErrorBackground && (
        <div className="flex justify-center items-center size-full">
          <ErrorBackground />
        </div>
      )}
      {isImageLoaded && SuccessBackground && (
        <div className="flex justify-center items-center size-full">
          <SuccessBackground />
        </div>
      )}
      <img
        ref={imageRef}
        src={isIntersecting ? src : null}
        alt={alt}
        title={title}
        loading="lazy"
        className={`${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        } ${imageClass}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {title !== '' && (
        <figcaption id="description-image" className="sr-only">
          {title}
        </figcaption>
      )}
    </figure>
  );
};

export { LazyImage };
