import React from 'react';
import { motion } from 'framer-motion';
import { links } from '../../../../services/ServiceInfo';
import { introToView } from '../../../../utils/introToView';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const intoView = (href, toggle) => {
  toggle();
  introToView(href);
};

const MenuItem = ({ i, toggle }) => {
  const { href, title, message, className } = links[i];
  const onKeyDown = e => e.key === 'Enter' && intoView(href, toggle);

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-start text-pure_white text-ct-sm"
      onClick={() => intoView(href, toggle)}
      onKeyDown={onKeyDown}>
      <a
        className={className ?? ''}
        role="button"
        aria-label={title}
        title={title}>
        {message}
      </a>
    </motion.li>
  );
};

export { MenuItem };
