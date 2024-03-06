import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Button } from '../../../common/button/Button';
import './CardFlip.css';
import { Cards } from './Cards';

const CardFlip = () => {
  const principalRef = useRef(null);
  const reverseRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsHeight, setCardsHeight] = useState({ principal: 0, reverse: 0 });
  const { principal, reverse } = Cards();
  const expectedHeight = isFlipped ? cardsHeight.reverse : cardsHeight.principal;

  useEffect(() => {
    const handleResize = () => {
      if (principalRef.current) {
        setCardsHeight(prevHeight => ({
          ...prevHeight,
          principal: principalRef.current.clientHeight
        }));
      }
      if (reverseRef.current) {
        setCardsHeight(prevHeight => ({
          ...prevHeight,
          reverse: reverseRef.current.clientHeight
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isFlipped]);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <>
      <motion.div
        className={`flip-card-inner w-full border-2 rounded-xl max-w-[688px] m-auto`}
        style={{ height: expectedHeight }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, AnimationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}>
        <div ref={principalRef} className="flip-card-front p-3 pt-4 absolute flex flex-col gap-4 justify-center items-center">
            <button
              className="absolute top-2 right-2"
              disabled={isFlipped}
              onClick={handleFlip}>
              <RiArrowGoBackLine />
            </button>
            {principal}

            <Button menssage={'Contáctanos'} px={'px-11'} py={'py-3'} />
        </div>

        <div ref={reverseRef} className="flip-card-back p-3 pt-4 absolute flex flex-col gap-4 justify-center items-center">
            <button
              className="absolute top-2 right-2"
              disabled={!isFlipped}
              onClick={handleFlip}>
              <RiArrowGoBackLine />
            </button>
            {reverse}

            <Button menssage={'Contáctanos'} px={'px-11'} py={'py-3'} />
        </div>
      </motion.div>
    </>
  );
};

export { CardFlip };
