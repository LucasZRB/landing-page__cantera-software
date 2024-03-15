import React, { useRef } from 'react';
import { Video } from './Video';
import { Layout } from '../../../common/Layout';
import { useMeasurement } from '../../../hooks/useMeasurement';
import { useGetWidthSize } from '../../../hooks/useGetWidthSize';
import './Program.css';

const Program = () => {
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
        id="program"
        tabIndex={-1}
        className="size-section program text-ct-base">
        <h2 className="text-main_green text-ct-sub-title">
          Nuestro programa
          <span className="sr-only">:</span>
        </h2>
        <div className="program-content">
          <Video />
          <div className="program-information flex flex-col justify-between items-center">
            {!isMobile && (
              <h3 className="text-blue_title text-ct-heading">
                Desarrolla tus conocimientos en tecnología
                <span className="sr-only">:</span>
              </h3>
            )}
            <p className="mt-4 mb-6">
              Con un avatar en nuestro metaverso nuestros alumnos pueden acceder
              a cada módulo de conocimiento ofreciéndoles una experiencia de
              aprendizaje dinámica, simple e innovadora.
            </p>
            <p>
              Además, hemos construido alianzas estratégicas con muchas empresas
              de la industria, de forma tal que logramos desarrollar un programa
              con las condiciones óptimas y la formación necesaria para que
              todos nuestros egresados cumplan los requisitos para participar en
              procesos de selección y así poder insertarse en el mundo
              tecnológico.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { Program };
