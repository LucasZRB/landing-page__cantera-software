import React from 'react';
import { motion } from 'framer-motion';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuIcon = ({ toggle }) => {
  return (
    <button
      onClick={toggle}
      className="flex justify-center items-center focus:outline outline-green_focus outline-4 border-none select-none absolute top-2 right-2 w-[3.75rem] h-[3.75rem] rounded-full bg-transparent">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
        />
      </svg>
    </button>
  );
};

export { MenuIcon };
