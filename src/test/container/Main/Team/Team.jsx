import React from 'react';
import { colors, participants } from '../../../../services/ServiceInfo';
import { Layout } from '../../../common/Layout';
import { Participants } from './Participants';
/* spell-checker: disable */
// TODO: Carrusel y Flexbox desktop
const Team = () => {
  return (
    <Layout className="bg-section2 w-full">
      <section id="team" className="text-ct-base min-w-ct-min w-full">
        <h2 className="text-blue_title text-ct-sub-title">
          Nuestro equipo
          <span className="sr-only">:</span>
        </h2>
        <p className="mt-8 mb-16">
          En La Cantera, creemos que el corazón de este proyecto reside en las
          personas que la hacen posible. Nuestro equipo está compuesto por
          apasionados profesionales dedicados a la misión de transformar vidas a
          través de la educación en tecnología. ¡Conócelos!
        </p>
        <div className="flex flex-col justify-center items-center">
          {participants.map((participant, index) => {
            const colorPosition = colors[index % colors.length];
            return (
              <Participants
                key={index}
                color={colorPosition}
                {...participant}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export { Team };
