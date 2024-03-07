import React, { useRef } from 'react';
import { Layout } from '../../../common/Layout';
import { CardFlip } from './CardFlip';
import { useMeasurement } from '../../../hooks/useMeasurement';
/* spell-checker: disable */

const InfoCollaboration = () => {
  const bgRef = useRef(null);
  const { width, height } = useMeasurement(bgRef);

  return (
    <Layout
      bgRef={bgRef}
      className="bg-pure_white w-full bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('./images/mobile_backgrounds/programBackground.png')",
        backgroundSize: `${width}px ${height}px`
      }}>
      <section
        id="info-collaboration"
        className="flex flex-col text-ct-base min-w-ct-min w-full">
        <h2 className="text-blue_title text-ct-sub-title">¿Cómo colaborar?</h2>
        <p className="mt-4 mb-8">
          En La Cantera, creemos en la fuerza de la colaboración para alcanzar
          metas más grandes y extender nuestra red de impacto. Tu ayuda y
          colaboración son esenciales para llevar la educación en tecnología a
          nuevos horizontes. Descubre cómo puedes ser parte de esta
          transformación.
        </p>

        <CardFlip />
      </section>
    </Layout>
  );
};

export { InfoCollaboration };
