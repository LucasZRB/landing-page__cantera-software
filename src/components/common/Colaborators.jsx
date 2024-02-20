import React from 'react';

const Colaborators = () => {
  return (
    <section id="colaborators">
      <h2>Colaboran con nosotros</h2>
      <p>
        Contamos con la colaboración de empresas y{' '}
        <span aria-hidden="true">ONG’s</span>
        <span className="hidden"> (</span>
        <span className="sr-only">ONGes</span>
        <span className="hidden">)</span> que nos ayudan a potenciarnos y llegar
        más lejos
      </p>
      <div>
        <div>
          <a
            href="#"
            title="Ir a la página del Colaborador"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://www.canterasoft.com/favicon.ico" alt="Logo 1" />
          </a>
        </div>
        <div>
          <a
            href="#"
            title="Ir a la página de Fombec"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://www.helpargentina.org/images/default/ong/logotipo_fonbec.jpg"
              alt="Fombec"
            />
          </a>
        </div>
        <div>
          <a
            href="#"
            title="Ir a la página de Cimientos"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://www.canterasoft.com/static/media/logo-cimientos.a0a31b686f84d9df10ee2cc195decc43.svg"
              alt="Cimientos"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Colaborators };
