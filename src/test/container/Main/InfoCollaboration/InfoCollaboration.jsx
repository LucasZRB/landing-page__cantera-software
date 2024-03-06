import React from 'react';
import { Layout } from '../../../common/Layout';
import { CardFlip } from './CardFlip';
/* spell-checker: disable */

const InfoCollaboration = () => {
  return (
    <Layout className="bg-pure_white w-full">
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
