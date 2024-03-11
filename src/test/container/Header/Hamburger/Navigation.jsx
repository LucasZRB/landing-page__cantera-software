import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { links } from '../../../../services/ServiceInfo';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ isVisible, toggle }) => {
  return (
    <motion.ul
      variants={variants}
      className={`${
        isVisible ? 'flex' : 'hidden'
      } flex-col overflow-auto gap-5 p-6 absolute top-[6.25rem] w-[14.375rem]`}
      style={{ height: 'calc(100% - 6.25rem)' }}>
      {links.map((_, i) => (
        <MenuItem i={i} toggle={toggle} key={i} />
      ))}
    </motion.ul>
  );
};
