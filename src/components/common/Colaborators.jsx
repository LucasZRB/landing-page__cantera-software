import React from 'react';

const Colaborators = () => {
  return (
    <section className='py-14 text-xl bg-section3' id="colaborators">
      <h2 className='text-blue_title text-[2.5rem] font-bold'>Colaboran con nosotros</h2>
      <p className='mt-5 mb-20'>
        Contamos con la colaboración de empresas y{' '}
        <span aria-hidden="true">ONG’s</span>
        <span className="hidden"> (</span>
        <span className="sr-only">ONGes</span>
        <span className="hidden">)</span> que nos ayudan a potenciarnos y llegar
        más lejos
      </p>
      <div className='flex items-center justify-center gap-7'>
        <div>
          <a
            href="#"
            title="Ir a la página del Colaborador"
            target="_blank"
            rel="noopener noreferrer">
            <img className='max-w-52 h-32' src="https://www.canterasoft.com/favicon.ico" alt="Logo 1" />
          </a>
        </div>
        <div>
          <a
            href="#"
            title="Ir a la página de Fombec"
            target="_blank"
            rel="noopener noreferrer">
            <img className='max-w-52 h-32'
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
              className='max-w-52 h-32'
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
