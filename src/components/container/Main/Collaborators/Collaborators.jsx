import React from 'react';
import { Pronunciation } from '../../../common/alternativeText/Pronunciation';
import { Company } from './Company';
import { Laout } from '../../../common/Laout';

const Collaborators = () => {
  return (
    <Laout className="py-14 bg-section3">
      <section className="text-xl max-w-7xl w-full" id="collaborators">
        <h2 className="text-blue_title text-[2.5rem] font-bold">
          Colaboran con nosotros
        </h2>
        <p className="mt-5 mb-20">
          Contamos con la colaboración de empresas y{' '}
          <Pronunciation word={'ONG’s'} pronunciation={'ONGes'} /> que nos
          ayudan a potenciarnos y llegar más lejos
        </p>
        <div className="flex items-center justify-center gap-7">
          <Company
            href={'#'}
            title={'Ir a la página del Colaborador'}
            imgSrc={'https://www.canterasoft.com/favicon.ico'}
            imgAlt={'Logo 1'}
          />
          <Company
            href={'#'}
            title={'Ir a la página de Fombec'}
            imgSrc={
              'https://www.helpargentina.org/images/default/ong/logotipo_fonbec.jpg'
            }
            imgAlt={'Fombec'}
          />
          <Company
            href={'#'}
            title={'Ir a la página de Cimientos'}
            imgSrc={
              'https://www.canterasoft.com/static/media/logo-cimientos.a0a31b686f84d9df10ee2cc195decc43.svg'
            }
            imgAlt={'Cimientos'}
          />
        </div>
      </section>
    </Laout>
  );
};

export { Collaborators };
