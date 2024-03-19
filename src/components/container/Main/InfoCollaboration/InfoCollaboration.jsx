import React, { Suspense, lazy, useRef } from 'react';
import { Layout } from '../../../common/Layout';
import { useMeasurement } from '../../../hooks/useMeasurement';
import { useGetWidthSize } from '../../../hooks/useGetWidthSize';

const CardFlip = lazy(() => import('./CardFlip'));
const ContentBlock = lazy(() => import('./ContentBlock'));

const InfoCollaboration = () => {
  const bgRef = useRef(null);
  const { width, height } = useMeasurement(bgRef);
  const isMobile = useGetWidthSize(768);

  return (
    <Layout
      bgRef={bgRef}
      className="bg-pure_white w-full bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('./images/${
          isMobile ? 'mobile' : 'desktop'
        }_backgrounds/programBackground.png')`,
        backgroundSize: `${width}px ${height}px`
      }}>
      <section
        id="info-collaboration"
        tabIndex={-1}
        className="size-section text-ct-base">
        <h2 className="text-blue_title text-ct-sub-title">¿Cómo colaborar?</h2>
        <p className="mt-4 mb-8">
          En La Cantera, creemos en la fuerza de la colaboración para alcanzar
          metas más grandes y extender nuestra red de impacto. Tu ayuda y
          colaboración son esenciales para llevar la educación en tecnología a
          nuevos horizontes. Descubre cómo puedes ser parte de esta
          transformación.
        </p>
        <Suspense>{isMobile ? <CardFlip /> : <ContentBlock />}</Suspense>
      </section>
    </Layout>
  );
};

export { InfoCollaboration };
