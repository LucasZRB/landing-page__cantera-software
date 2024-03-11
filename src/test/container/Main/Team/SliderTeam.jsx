import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { LazyImage } from '../../../common/LazyImage';
import { Bubble } from '../../../../assets/svgs/Bubble';
import { SkBubble } from '../../../common/skeletons/SkBubble';
import { colors, participants } from '../../../../services/ServiceInfo';
import { PersonIconError } from '../../../../assets/svgs/PersonIconError';

const variants = {
  initial: direction => ({
    x: 200 * direction,
    opacity: 0,
    scale: 0.5
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 20 },
      opacity: { duration: 0.2 }
    }
  },
  exit: direction => ({
    x: -200 * direction,
    opacity: 0,
    scale: 0.5,
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 20 },
      opacity: { duration: 0.2 }
    }
  })
};

const SliderTeam = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { href, title, imgSrc, fullName, position, description } =
    participants[index];

  const prevStep = () => {
    setDirection(-1);
    if (index === 0) {
      return setIndex(participants.length - 1);
    }
    setIndex(index - 1);
  };

  const nextStep = () => {
    setDirection(1);
    if (index === participants.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  const baseClass = 'relative outline-none w-[12.625rem] h-[17.375rem]';
  const focusBaseClass =
    "focus:after:content-[''] focus:after:block focus:after:h-full focus:after:border-b-2 focus:after:mt-1 focus:after:w-1/2 focus:after:mx-auto";
  const focusColorClass = 'focus:after:border-blue_title';
  const className = `${baseClass} ${focusBaseClass} ${focusColorClass}`;

  const optionsImage = {
    src: imgSrc,
    figureClass: 'size-full overflow-hidden',
    imageClass: 'absolute top-[12px] right-[5px] size-[192px]',
    SuccessBackground: () => <Bubble bg={colors[index]} alt="" />,
    LoadingBackground: () => <SkBubble />,
    ErrorBackground: () => (
      <PersonIconError bg={colors[index]} className="opacity-60" alt="" />
    )
  };

  const animations = {
    variants: variants,
    animate: 'animate',
    initial: 'initial',
    exit: 'exit',
    key: href,
    custom: direction
  };

  return (
    <div className={'flex'}>
      <button
        className="mr-4 my-auto size-fit hover:text-main_green text-ct-main-title"
        aria-label="Participante anterior"
        title='Participante anterior'
        onClick={prevStep}>
        <RiArrowDropLeftLine aria-hidden="true" />
      </button>
      <a
        className={className}
        href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div {...animations} className='absolute'>
            <LazyImage {...optionsImage} />
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
          </motion.div>
        </AnimatePresence>
      </a>
      <button
        className="mr-4 my-auto size-fit hover:text-main_green text-ct-main-title"
        aria-label="Participante siguiente"
        title='Participante siguiente'
        onClick={nextStep}>
        <RiArrowDropRightLine aria-hidden="true" />
      </button>
    </div>
  );
};

export default SliderTeam;
