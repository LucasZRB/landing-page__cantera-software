import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { LazyImage } from '../../../common/LazyImage';
import { companies } from '../../../../services/ServiceInfo';

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

const SliderTest = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  return (
    <div className={'flex'}>
      <button
        className="pr-4 hover:text-main_green text-ct-main-title"
        onClick={prevStep}>
        <RiArrowDropLeftLine aria-hidden="true" />
      </button>
      <a
        className="w-52 h-32 flex justify-center items-center bg-pure_white rounded-xl outline-none"
        href={'#'}>
        <AnimatePresence initial={false} custom={direction}>
          <LazyImage
            src={companies[index].imgSrc}
            alt={companies[index].imgAlt}
            title={companies[index].imgAlt}
            imageClass="size-full object-contain"
            LoadingBackground={null}
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            key={companies[index].href}
            custom={direction}
          />
        </AnimatePresence>
      </a>
      <button
        className="pl-4 hover:text-main_green text-ct-main-title"
        onClick={nextStep}>
        <RiArrowDropRightLine aria-hidden="true" />
      </button>
    </div>
  );
};

export default SliderTest;
