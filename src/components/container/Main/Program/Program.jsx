import React from 'react';
import { Laout } from '../../../common/Laout';
import { Video } from './Video';

const Program = () => {
  return (
    <Laout className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('./images/desktop_backgrounds/programBackground.png')" }}>
      <section id="program" className="grid gap-16 text-ct-base text-start max-w-7xl w-full" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <h2 className="text-main_green text-ct-sub-title font-bold" style={{ gridColumn: 'span 2' }}>
          Nuestro programa
          <span className='sr-only'>:</span>
        </h2>
        <div className="grid gap-10" style={{ gridColumn: 'span 2', gridTemplateRows: 'repeat(3, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Video />
          <div className="flex flex-col justify-between" style={{ gridRow: 'span 3', gridColumn: 'span 1', gridTemplateRows: 'repeat(3, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <h3 className="text-blue_title text-ct-sub-title font-bold leading-10">
              Desarrolla tus conocimientos en tecnología
              <span className='sr-only'>:</span>
            </h3>
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
    </Laout>
  );
};

export { Program };
