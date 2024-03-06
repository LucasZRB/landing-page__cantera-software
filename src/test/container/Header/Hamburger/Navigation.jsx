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

export const Navigation = ({ isOpen, setIsOpen }) => {
  return (
    <motion.ul
      variants={variants}
      className={`flex flex-col gap-5 p-6 absolute top-[6.25rem] w-[14.375rem] ${isOpen ? '' : 'pointer-events-none'}`}>
      {links.map((_, i) => (
        <MenuItem i={i} setState={setIsOpen} key={i} />
      ))}
    </motion.ul>
  );
};
