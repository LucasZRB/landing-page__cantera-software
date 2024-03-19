import React from 'react';
import { TeamWithSlider } from './TeamMemberCard';
import { Bubble } from '../../../../assets/svgs/Bubble';
import { SkBubble } from '../../../common/skeletons/SkBubble';
import { colors, participants } from '../../../../services/ServiceInfo';
import { PersonIconError } from '../../../../assets/svgs/PersonIconError';

const SliderDataProvider = () => {
  const baseClass = 'relative outline-none w-[12.625rem] h-[17.375rem]';

  const optionsImage = ({ imgSrc, index }) => ({
    src: imgSrc,
    figureClass: 'size-full overflow-hidden',
    imageClass: 'absolute top-[12px] right-[5px] size-[192px]',
    SuccessBackground: () => <Bubble bg={colors[index]} alt="" />,
    LoadingBackground: () => <SkBubble />,
    ErrorBackground: () => (
      <PersonIconError bg={colors[index]} className="opacity-60" alt="" />
    )
  });

  return (
    <TeamWithSlider
      array={participants}
      arrayName={'Participante'}
      baseClass={baseClass}
      propsLink={title => ({ title })}
      optionsImage={optionsImage}
    />
  );
};

export default SliderDataProvider;
