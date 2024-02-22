import React from 'react';
import { Laout } from '../../../common/Laout';
import { Video } from './Video';

const Program = () => {
  return (
    <Laout className='mb-24'>
      <section id="program" className="text-xl text-start max-w-7xl w-full flex flex-col items-center">
        <h2 className="w-4/5 text-main_green text-[2.5rem] font-bold mb-16">
          Nuestro programa
        </h2>
        <div className="flex justify-center gap-10">
          <Video />
          <div className="flex-1 max-w-96">
            <h3 className="text-blue_title text-[2.5rem] font-bold leading-10">
              Desarrolla tus conocimientos en tecnología
            </h3>
            <p className="mt-4 mb-6">
              Con un avatar en nuestro metaverso nuestros alumnos pueden acceder
              a cada módulo de conocimiento ofreciéndoles una experiencia de
              aprendizaje dinámica, simple e innovadora
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