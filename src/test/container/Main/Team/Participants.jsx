import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { LazyImage } from '../../../common/LazyImage';
import { Bubble } from '../../../../assets/svgs/Bubble';
import { PersonIconError } from '../../../../assets/svgs/PersonIconError';
import { SkBubble } from '../../../common/skeletons/SkBubble';

const Participants = ({
  href,
  title,
  imgSrc,
  fullName,
  position,
  description,
  color
}) => {
  const baseClass = 'relative outline-none';
  const focusBaseClass =
    "focus:after:content-[''] focus:after:block focus:after:border-b-2 focus:after:mt-1 focus:after:w-1/2 focus:after:mx-auto";
  const focusColorClass = 'focus:after:border-blue_title';
  const className = `${baseClass} ${focusBaseClass} ${focusColorClass}`;

  const optionsImage = {
    src: imgSrc,
    figureClass: 'size-full overflow-hidden',
    imageClass: 'absolute top-[12px] right-[5px] size-[192px]',
    SuccessBackground: () => <Bubble bg={color} alt="" />,
    LoadingBackground: () => <SkBubble />,
    ErrorBackground: () => <PersonIconError bg={color} className='opacity-60' alt="" />
  };

  return (
    <div>
      <a
        className={className}
        href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer">
        <div className="">
          <LazyImage {...optionsImage} />
        </div>
        <FaLinkedinIn
          className="absolute top-[8px] right-[8px] text-ct-base"
          aria-hidden="true"
        />
        <div className="mt-7">
          <span className="sr-only">{description}</span>
          <p aria-hidden>
            <b>{fullName}</b>
          </p>
          <span aria-hidden>{position}</span>
        </div>
      </a>
    </div>
  );
};

export { Participants };
