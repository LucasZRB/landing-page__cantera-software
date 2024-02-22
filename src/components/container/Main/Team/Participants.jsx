import React from 'react';

const Participants = ({
  href,
  title,
  imgSrc,
  fullName,
  position,
  description
}) => {
  return (
    <div>
      <a
        className="outline-none focus:after:content-[''] focus:after:block focus:after:border-b-2 focus:after:border-blue_title focus:after:mt-1 focus:after:w-1/2 focus:after:mx-auto"
        href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer">
        <figure>
          <img className="max-w-48 h-48" src={imgSrc} loading="lazy" />
        </figure>
        <div className="mt-7">
          <span className="sr-only">{description}</span>
          <p aria-hidden="true">
            <b>{fullName}</b>
          </p>
          <span aria-hidden="true">{position}</span>
        </div>
      </a>
    </div>
  );
};

export { Participants };
