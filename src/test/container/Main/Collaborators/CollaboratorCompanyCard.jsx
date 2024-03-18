import React from 'react';
import { withSlider } from '../../../hoc/withSlider';
import { LazyImage } from '../../../common/LazyImage';

const CollaboratorCompanyCard = ({ optionsImage, animations }) => {
  return <LazyImage {...optionsImage} {...animations} />;
};

export const CollaboratorWithSlider = withSlider(CollaboratorCompanyCard);
