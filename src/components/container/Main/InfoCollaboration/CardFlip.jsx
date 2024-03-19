import React from 'react';
import { Button } from '../../../common/button/Button';
import { Cards } from './Cards';

const CardFlip = () => {
  const cards = Cards();

  return (
    <>
      <div className={`space-y-11`}>
        {cards.map((card, index) => (
        <div
          key={index}
          className="w-full border-2 rounded-xl max-w-[688px] m-auto p-3 pt-4 flex flex-col gap-4 justify-center items-center">
          {card}

          <Button message={'Contáctanos'} px={'px-11'} py={'py-3'} />
        </div>
        ))}
      </div>
    </>
  );
};

export default CardFlip;
