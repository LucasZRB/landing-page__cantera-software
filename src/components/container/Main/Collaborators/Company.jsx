import React from 'react';

const Company = ({ href, title, imgSrc, imgAlt }) => {
  return (
    <div>
      <a
        className="outline-none focus:after:content-[''] focus:after:block focus:after:border-b-2 focus:after:border-blue_title focus:after:mt-1 focus:after:w-1/2 focus:after:mx-auto"
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
