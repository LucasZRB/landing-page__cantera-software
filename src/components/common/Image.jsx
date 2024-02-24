import React, { useState, useEffect } from 'react';
import { MdImageSearch } from 'react-icons/md';

const Image = ({ width, src, alt = '', description = null }) => {
  const [loading, setLoading] = useState(true);

  const isHidden = alt == '';

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={`flex justify-center items-center border p-5 rounded-xl shadow-2xl ${width}`}>
          <div className={`flex justify-center items-center ${width} bg-gray-300 animate-pulse`}>
            <MdImageSearch className={`text-gray-200 ${width}`} />
          </div>
        </div>
      ) : (
        <figure className={width}>
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={alt}
            aria-hidden={isHidden}
            loading="lazy"
            aria-describedby="description-image"
          />
          {description ? (
            <figcaption id="description-image" className="sr-only">
              {description}
            </figcaption>
          ) : null}
        </figure>
      )}
    </>
  );
};

export { Image };
