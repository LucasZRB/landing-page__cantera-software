import React from 'react';
import { Video } from './Video';
import { Laout } from '../../../common/Laout';
import { Button2 } from '../../../common/button/Button2';

const Program = () => {
  return (
    <Laout className="bg-pure_white w-full">
      <section
        id="program"
        className="flex flex-col items-center gap-6 text-ct-base text-start min-w-ct-min w-full">
        <h2 className="text-main_green text-ct-sub-title">
          Nuestro programa
          <span className="sr-only">:</span>
        </h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between items-center">
            <h3 className="text-blue_title text-ct-heading">
              Desarrolla tus conocimientos en tecnología
              <span className="sr-only">:</span>
            </h3>
            <p className="mt-4 mb-6">
              Con un avatar en nuestro metaverso nuestros alumnos pueden acceder
              a cada módulo de conocimiento ofreciéndoles una experiencia de
              aprendizaje dinámica, simple e innovadora.
            </p>
            <Button2
              px={'px-9'}
              py={'py-3 mb-4'}
              message={'Leer Más...'}
              description={'Leer Más...'}
              title={'Leer Más...'}
              ariaId={'readMore-program'}
            />
            <p>
              Además, hemos construido alianzas estratégicas con muchas empresas
              de la industria, de forma tal que logramos desarrollar un programa
              con las condiciones óptimas y la formación necesaria para que
              todos nuestros egresados cumplan los requisitos para participar en
              procesos de selección y así poder insertarse en el mundo
              tecnológico.
            </p>
          </div>
          <Video />
        </div>
      </section>
    </Laout>
  );
};

export { Program };
