import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { useAutoSlide } from '../hooks/useAutoSlide';

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

const withSlider = (WrapperComponent) => {
  return principalProps => {
    let { array, arrayName, baseClass, propsLink = () => ({}), optionsImage, ...props } = principalProps;

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const { href, ...extra } = array[index];

    propsLink = propsLink({...extra, index});
    optionsImage = optionsImage({...extra, index});

  const focusBaseClass =
    "focus:after:content-[''] focus:after:block focus:after:absolute focus:after:h-full focus:after:border-b-2 focus:after:mt-1 focus:after:w-1/2 focus:after:mx-auto";
  const focusColorClass = 'focus:after:border-blue_title';
  const classNameLink = `${baseClass} ${focusBaseClass} ${focusColorClass}`;

  const prevStep = () => {
    setDirection(-1);
    if (index === 0) {
      return setIndex(array.length - 1);
    }
    setIndex(index - 1);
  };

  const nextStep = () => {
    setDirection(1);
    if (index === array.length - 1) {
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

  const animations = {
    variants: variants,
    animate: 'animate',
    initial: 'initial',
    exit: 'exit',
    key: href,
    custom: direction
  };

  const wrapperProps = {
    ...props,
    propsImage: array[index],
    optionsImage,
    animations
  }

    return (
      <>
        <div className="w-full flex justify-between mb-4">
          <button onClick={() => changedDelay(3)}>Rápido</button>
          <button onClick={() => changedDelay(5)}>Normal</button>
          <button onClick={() => changedDelay(10)}>Lento</button>
          <button onClick={() => setIsPaused(state => !state)}>
            {isPaused ? 'Reanudar' : 'Pausar'}
          </button>
        </div>
        <div className="flex relative" onKeyDown={onKeyDown}>
          <button
            className="mr-4 my-auto size-fit hover:text-main_green text-ct-main-title"
            aria-label={`${arrayName} anterior`}
            title={`${arrayName} anterior`}
            onClick={prevStep}>
            <RiArrowDropLeftLine aria-hidden="true" />
          </button>
          <a
            className={classNameLink}
            href={href}
            {...propsLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}>
            <AnimatePresence initial={false} custom={direction}>
              <WrapperComponent {...wrapperProps} />
            </AnimatePresence>
          </a>
          <button
            className="ml-4 my-auto size-fit hover:text-main_green text-ct-main-title"
            aria-label={`${arrayName} siguiente`}
            title={`${arrayName} siguiente`}
            onClick={nextStep}>
            <RiArrowDropRightLine aria-hidden="true" />
          </button>
        </div>
      </>
    );
  }
};

export { withSlider };
