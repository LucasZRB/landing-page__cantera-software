import React from 'react';

const Program = () => {
  return (
    <section id="program">
      <h2>Nuestro programa</h2>
      <div>
        <video controls autoPlay muted loop>
          <source
            src="https://www.canterasoft.com/static/media/video.b3b3efb8854058371083.mp4"
            type="video/mp4"
          />
          <track kind="description" src="descripcion_video_corto.vtt" />
        </video>
        <div>
          <h3>Desarrolla tus conocimientos en tecnología</h3>
          <p>
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
