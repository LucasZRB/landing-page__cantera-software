import React from 'react';

const Company = ({ href, title, imgSrc, imgAlt }) => {
  return (
    <div>
      <a
        href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="description-image">
        <img
          className="max-w-52 h-32"
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
        />
        <figcaption id="description-image" className="sr-only">
          {title}
        </figcaption>
      </a>
    </div>
  );
};

export { Company };
