import React, { useRef } from 'react';
import { Layout } from '../../common/Layout';
import { LazyImage } from '../../common/LazyImage';
import { Button } from '../../common/button/Button';
import { useMeasurement } from '../../hooks/useMeasurement';
import { useGetWidthSize } from '../../hooks/useGetWidthSize';
import './Introduction.css';

const Introduction = () => {
  const bgRef = useRef(null);
  const { width, height } = useMeasurement(bgRef);
  const isMobile = useGetWidthSize(768);

  return (
    <Layout
      bgRef={bgRef}
      className="bg-pure_white w-full flex bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('./images/${
          isMobile ? 'mobile' : 'desktop'
        }_backgrounds/introductionBackground.png')`,
        backgroundSize: `${width}px ${height}px`
      }}>
      <section
        id="introduction"
        tabIndex={-1}
        className="size-section desktop-introduction__container">
        <div className="desktop-introduction__content">
          <h1 className="text-ct-main-title">
            Transformando sueños en código <span className="sr-only">:</span>
          </h1>
          <p className="text-ct-base mt-4 md:mt-8 mb-6 md:mb-11">
            Cambiar vidas por medio de la tecnología es posible. En La Cantera
            facilitamos el acceso a una educación de calidad orientada a
            perfiles tecnológicos, y promovemos el compromiso social y
            diversidad en la industria. ¿Querés ser parte de esta
            transformación?
          </p>
          <div className="w-full">
            <Button message="Quiero colaborar" px="px-14 md:px-20" py="py-3" />
          </div>
        </div>
        <LazyImage
          src={'./images/decoratives/introductionImg.png'}
          figureClass={'desktop-introduction__image'}
        />
      </section>
    </Layout>
  );
};

export { Introduction };
