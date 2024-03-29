import React from 'react';
import { Pronunciation } from '../../../common/alternativeText/Pronunciation';
import { Company } from './Company';
import { Laout } from '../../../common/Laout';

const Collaborators = () => {
  const companies = [
    { href: 'https://www.fonbec.org.ar/', title: '', imgSrc: './images/companies/logo_fonbec.png', imgAlt: 'Fonbec' },
    { href: 'https://fundacioneddy.org/', title: '', imgSrc: './images/companies/logo_eddy.png', imgAlt: 'Fundación Eddy' },
    { href: 'https://larueca.info/', title: '', imgSrc: './images/companies/logo_rueca.png', imgAlt: 'La Rueca Asociación' },
    { href: 'https://www.nogadev.com/', title: '', imgSrc: './images/companies/logo_nogadev.png', imgAlt: 'Nogadev' }
  ];

  return (
    <Laout className="py-[8.438rem] bg-section3 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('./images/desktop_backgrounds/collaboratorsBackground.png')" }}>
      <section className="text-ct-base max-w-7xl w-full" id="collaborators">
        <h2 className="text-blue_title text-ct-sub-title font-bold">
          Colaboran con nosotros
          <span className="sr-only">:</span>
        </h2>
        <p className="mt-5 mb-20">
          Contamos con la colaboración de empresas y{' '}
          <Pronunciation word={'ONG’s'} pronunciation={'ONGes'} /> que nos
          ayudan a potenciarnos y llegar más lejos.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-7">
          {companies.map((company, index) => (
            <Company key={index} {...company} title={`Ir a la página de ${company.imgAlt}`} />
          ))}
        </div>
      </section>
    </Laout>
  );
};

export { Collaborators };
