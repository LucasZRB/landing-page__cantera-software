import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { withSlider } from '../../../hoc/withSlider';
import { LazyImage } from '../../../common/LazyImage';

const TeamMemberCard = ({ propsImage, optionsImage, animations }) => {
  const { fullName, position, description } = propsImage;

  return (
    <motion.div {...animations} className="absolute">
      <LazyImage {...optionsImage} />
      <FaLinkedinIn
        className="absolute top-[8px] right-[8px] text-ct-base"
        aria-hidden="true"
      />
      <div className="mt-7">
        <span className="sr-only">{description}</span>
        <p aria-hidden>
          <b>{fullName}</b>
        </p>
        <span aria-hidden>{position}</span>
      </div>
    </motion.div>
  );
};

export const TeamWithSlider = withSlider(TeamMemberCard);
