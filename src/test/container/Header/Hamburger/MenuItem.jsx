import React from 'react';
import { motion } from 'framer-motion';
import { links } from '../../../../services/ServiceInfo';

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

const introToView = (href, setState) => {
  const section = document.getElementById(href);
  setState();
  section.scrollIntoView({ behavior: 'smooth' });
};

const MenuItem = ({ i, setState }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-start text-pure_white text-ct-sm">
      <a
        className={links[i].className ?? ''}
        type="button"
        aria-describedby={links[i].title}
        title={links[i].title}
        onClick={() => introToView(links[i].href, setState)}>
        {links[i].message}
      </a>
    </motion.li>
  );
};

export { MenuItem };
