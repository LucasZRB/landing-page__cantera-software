import React from 'react';
import { Abbr } from '../../../common/alternativeText/Abbr';
import { Participants } from './Participants';

const Team = () => {
  return (
    <section className="py-24 text-xl bg-section2" id="team">
      <h2 className="text-blue_title text-[2.5rem] font-bold">
        Nuestro equipo
      </h2>
      <p className="mt-8 mb-16">
        En La Cantera, creemos que el corazón de este proyecto reside en las
        personas que la hacen posible. Nuestro equipo está compuesto por
        apasionados profesionales dedicados a la misión de transformar vidas a
        través de la educación en tecnología. ¡Conócelos!
      </p>
      <div className="flex items-center justify-center flex-wrap gap-28">
        <Participants
          href={'#'}
          title={'Ir a la página de Lucas'}
          imgSrc={'../../../public/images/Lucas.png'}
          fullName={'Lucas Muñoz'}
          position={
            <>
              <Abbr abbr={'CEO'} fullWord={'Director Ejecutivo'} /> y Co-Founder
            </>
          }
          description={
            'Esta persona es Lucas, Director Ejecutivo, también llamado CEO, y Coh-Founder de la empresa'
          }
        />
        <Participants
          href={'#'}
          title={'Ir a la página de Fernando'}
          imgSrc={'../../../public/images/Nogara.png'}
          fullName={'Fernando Nogara'}
          position={'Co-Founder'}
          description={'Esta persona es Fernando, Coh-Founder de la empresa'}
        />
        <Participants
          href={'#'}
          title={'Ir a la página de Carla'}
          imgSrc={'../../../public/images/Panelo.png'}
          fullName={'Carla Panelo'}
          position={'Posicion'}
          description={'Esta persona es Carla, Posicion de la empresa'}
        />
        <Participants
          href={'#'}
          title={'Ir a la página de Paulina'}
          imgSrc={'../../../public/images/Paulina.png'}
          fullName={'Paulina Ibarra'}
          position={'Marketing Manager'}
          description={
            'Esta persona es Paulina, Marketing Manayer de la empresa'
          }
        />
      </div>
    </section>
  );
};

export { Team };
