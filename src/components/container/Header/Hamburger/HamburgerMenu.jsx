import React, { useEffect, useRef, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuIcon } from './MenuIcon';
import { Navigation } from './Navigation';
import { useDimensions } from '../../../hooks/useDimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 38px 38px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: (width = 300) => ({
    clipPath: `circle(30px at ${width - 38}px 38px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  })
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const [isVisible, setIsVisible] = useState(isOpen);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleBody = state =>
    document.body.classList.toggle('overflow-hidden', state);

  useEffect(() => {
    if (!isOpen) {
      const hideList = setTimeout(() => {
        setIsVisible(false);
        toggleBody(false);
      }, 1000);
      return () => clearTimeout(hideList);
    } else {
      setIsVisible(true);
      toggleBody(true);
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen();
  };

  const baseClass =
    'absolute top-3 left-3 h-[3.75rem] object-cover aspect-[92/37] transition-all';
  const variableClass = isOpen
    ? 'opacity-1 duration-500'
    : 'opacity-0 duration-1000' + !isVisible && ' hidden';
  const className = `${baseClass} ${variableClass}`;

  const optionsImage = {
    className,
    src: './images/mobile_backgrounds/hamburgerLogo.png',
    alt: ''
  };

  return (
    <nav
      className={`fixed z-20 ${
        isVisible ? 'h-full w-screen' : ''
      } top-0 right-0`}>
      <div
        className={`${
          isVisible
            ? 'h-full bg-black/50 backdrop-blur-sm transition-all duration-500'
            : ''
        }`}
        onClick={toggleOpen}></div>
      <motion.section
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className={`absolute top-0 right-0 bottom-0 w-[18.75rem] ${
          !isVisible && 'h-20'
        }`}>
        <MenuIcon toggle={toggleOpen} />
        <motion.div
          className={`absolute top-0 right-0 bottom-0 w-[18.75rem] bg-main_green ${
            !isVisible && 'pointer-events-none'
          }`}
          variants={sidebar}
        />
        <img {...optionsImage} />
        <Navigation isVisible={isVisible} toggle={toggleOpen} />
      </motion.section>
    </nav>
  );
};

export default HamburgerMenu;
