import React from 'react';
import { companies } from '../../../../services/ServiceInfo';
import { CollaboratorWithSlider } from './CollaboratorCompanyCard';

const SliderDataProvider = () => {
  const baseClass =
    'w-52 h-32 flex justify-center items-center bg-pure_white rounded-xl outline-none';

  const optionsImage = ({ imgSrc, imgAlt, title }) => ({
    src: imgSrc,
    alt: imgAlt,
    title: title === '' ? `Ir a la página de ${imgAlt}` : title,
    imageClass: 'size-full object-contain',
    LoadingBackground: null
  });

  return (
    <CollaboratorWithSlider
      array={companies}
      arrayName="Compañia"
      baseClass={baseClass}
      optionsImage={optionsImage}
    />
  );
};

export default SliderDataProvider;
