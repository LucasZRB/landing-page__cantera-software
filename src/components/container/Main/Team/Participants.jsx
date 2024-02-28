import React from 'react';
import { Bubble } from '../../../../assets/svgs/Bubble';
import { FaLinkedinIn } from 'react-icons/fa';

const Participants = ({
  href,
  title,
  imgSrc,
  fullName,
  position,
  description,
  color
}) => {
  return (
    <div>
      <a
        className="relative outline-none focus:after:content-[''] focus:after:block focus:after:border-b-2 focus:after:border-blue_title focus:after:mt-1 focus:after:w-1/2 focus:after:mx-auto"
        href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer">
        <Bubble bg={color} alt="" />
        <FaLinkedinIn className="absolute top-2 right-2 text-ct-base" aria-hidden="true" />
        <figure className="absolute top-3 right-1">
          <img className="max-w-48 h-48" src={imgSrc} alt="" loading="lazy" />
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
