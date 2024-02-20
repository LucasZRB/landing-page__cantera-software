import React from 'react';

const Introduction = () => {
  return (
    <section id="introduction">
      <div>
        <h1>Transformando sueños en código</h1>
        <p>
          Cambiar vidas por medio de la tecnología es posible. En La Cantera
          facilitamos el acceso a una educación de calidad orientada a perfiles
          tecnológicos, y promovemos el compromiso social y diversidad en la
          industria. ¿Querés ser parte de esta transformación?
        </p>
        <a href="#cotact" aria-label="Botón para ir contactarnos" role="button">
          <span>Quiero colaborar</span>
          <span className="sr-only">, ir al formulario de contacto</span>
        </a>
        <figure>
          <img src="../../../public/images/ImagenHeader.png" alt="" />
        </figure>
      </div>
    </section>
  );
};

export { Introduction };
