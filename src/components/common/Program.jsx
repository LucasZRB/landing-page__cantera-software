import React from 'react';

const Program = () => {
  return (
    <section id="program" className='text-xl text-start'>
      <h2 className="text-main_green text-[2.5rem] font-bold mb-16">Nuestro programa</h2>
      <div className='flex items-center justify-center gap-10'>
        <video controls autoPlay muted loop className='flex-1'>
          <source
            src="https://www.canterasoft.com/static/media/video.b3b3efb8854058371083.mp4"
            type="video/mp4"
          />
          <track kind="description" src="descripcion_video_corto.vtt" />
        </video>
        <div className='flex-1'>
          <h3 className="text-blue_title text-[2.5rem] font-bold leading-10">
            Desarrolla tus conocimientos en tecnología
          </h3>
          <p className='mt-4 mb-6'>
            Con un avatar en nuestro metaverso nuestros alumnos pueden acceder a
            cada módulo de conocimiento ofreciéndoles una experiencia de
            aprendizaje dinámica, simple e innovadora
          </p>
          <p>
            Además, hemos construido alianzas estratégicas con muchas empresas
            de la industria, de forma tal que logramos desarrollar un programa
            con las condiciones óptimas y la formación necesaria para que todos
            nuestros egresados cumplan los requisitos para participar en
            procesos de selección y así poder insertarse en el mundo
            tecnológico.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Program };
