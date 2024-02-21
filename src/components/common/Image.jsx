import React from 'react';

const Image = ({ width, src, alt = "", description = null }) => {
  return (
    <figure className={width}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        aria-describedby="description-image"
      />
      {description ? (
        <figcaption id="description-image" className="sr-only">
          {description}
        </figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

export { Image };
