import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { LazyImage } from '../../../common/LazyImage';
import { companies } from '../../../../services/ServiceInfo';
import { useAutoSlide } from '../../../hooks/useAutoSlide';

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
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 20 },
      opacity: { duration: 0.2 }
    }
  },
  exit: direction => ({
    x: -200 * direction,
    opacity: 0,
    scale: 0.5,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 20 },
      opacity: { duration: 0.2 }
    }
  })
};

const SliderCollaborators = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { href, imgSrc, imgAlt, title } = companies[index];

  const baseClass = "w-52 h-32 flex justify-center items-center bg-pure_white rounded-xl outline-none"
  const focusBaseClass =
    "focus:after:content-[''] focus:after:block focus:after:absolute focus:after:h-full focus:after:border-b-2 focus:after:mt-1 focus:after:w-1/2 focus:after:mx-auto";
  const focusColorClass = 'focus:after:border-blue_title';
  const classNameImg = `${baseClass} ${focusBaseClass} ${focusColorClass}`

  const prevStep = () => {
    setDirection(-1);
    if (index === 0) {
      return setIndex(companies.length - 1);
    }
    setIndex(index - 1);
  };

  const nextStep = () => {
    setDirection(1);
    if (index === companies.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  const onKeyDown = e => {
    if (e.key === 'ArrowLeft') {
      prevStep();
    } else if (e.key === 'ArrowRight') {
      nextStep();
    }
  };

  const { changedDelay, isPaused, setIsPaused } = useAutoSlide(index, nextStep);

  const optionsImage = {
    src: imgSrc,
    alt: imgAlt,
    title: title === '' ? `Ir a la página de ${imgAlt}` : title,
    imageClass: 'size-full object-contain',
    LoadingBackground: null
  };

  const animations = {
    variants: variants,
    animate: 'animate',
    initial: 'initial',
    exit: 'exit',
    key: href,
    custom: direction
  }

  return (
    <>
      <div className="w-full flex justify-between mb-4">
        <button onClick={() => changedDelay(3)}>Rapido</button>
        <button onClick={() => changedDelay(5)}>Normal</button>
        <button onClick={() => changedDelay(10)}>Lento</button>
        <button onClick={() => setIsPaused(state => !state)}>
          {isPaused ? 'Reanudar' : 'Pausar'}
        </button>
      </div>
      <div className={'flex relative'} onKeyDown={onKeyDown}>
        <button
          className="mr-4 my-auto size-fit hover:text-main_green text-ct-main-title"
          aria-label="Compañia anterior"
          title="Compañia anterior"
          onClick={prevStep}>
          <RiArrowDropLeftLine aria-hidden="true" />
        </button>
        <a
          className={classNameImg}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}>
          <AnimatePresence initial={false} custom={direction}>
            <LazyImage {...optionsImage} {...animations} />
          </AnimatePresence>
        </a>
        <button
          className="ml-4 my-auto size-fit hover:text-main_green text-ct-main-title"
          aria-label="Compañia siguiente"
          title="Compañia siguiente"
          onClick={nextStep}>
          <RiArrowDropRightLine aria-hidden="true" />
        </button>
      </div>
    </>
  );
};

export default SliderCollaborators;
