import React, { useEffect, useState } from 'react';
import { Abbr } from '../../../common/alternativeText/Abbr';
import { Participants } from './Participants';
import { Laout } from '../../../common/Laout';

const Team = () => {
  const colors = ['#FFD55F', '#48B95D', '#FF6B79', '#01CEDA'];
  const participants = [
    { url: '#', title: 'Ir a la página de Lucas', imgSrc: '../../../public/Lucas.png', fullName: 'Lucas Muñoz', position: 'Co-Founder', description: 'Esta persona es Lucas, Director Ejecutivo, también llamado CEO, y Coh-Founder de la empresa' },
    { url: '#', title: 'Ir a la página de Fernando', imgSrc: '../../../public/Nogara.png', fullName: 'Fernando Nogara', position: <><Abbr abbr={'CEO'} fullWord={'Director Ejecutivo'} /> y Co-Founder</>, description: 'Esta persona es Fernando, Coh-Founder de la empresa' },
    { url: '#', title: 'Ir a la página de Carla', imgSrc: '../../../public/Panelo.png', fullName: 'Carla Panelo', position: <><Abbr abbr={'HR'} fullWord={'Recursos humanos'} /> Manager</>, description: 'Esta persona es Carla, Manayer de Recursos Humanos de la empresa' },
    { url: '#', title: 'Ir a la página de Paulina', imgSrc: '../../../public/Paulina.png', fullName: 'Paulina Ibarra', position: 'Marketing Manager', description: 'Esta persona es Paulina, Marketing Manayer de la empresa' }
  ];

  return (
    <Laout className="py-24 bg-section2">
      <section className="text-xl max-w-7xl w-full" id="team">
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
          {participants.map(({ url, title, imgSrc, fullName, position, description }, index) => (
              <Participants
                key={index}
                color={colors[index % colors.length]}
                href={url}
                title={title}
                imgSrc={imgSrc}
                fullName={fullName}
                position={position}
                description={description}
              />
            )
          )}
        </div>
      </section>
    </Laout>
  );
};

export { Team };
