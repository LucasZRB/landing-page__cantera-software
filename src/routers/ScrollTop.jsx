import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollTop = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-4 bg-blue_title origin-left z-10 rounded-e-lg hover:motion-safe:animate-pulse"
      style={{ scaleX }}
    />
  );
};

export { ScrollTop };
