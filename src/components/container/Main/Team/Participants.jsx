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
      <a href={href} title={title} target="_blank" rel="noopener noreferrer">
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
