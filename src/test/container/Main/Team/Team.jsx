import React, { lazy, Suspense } from 'react';
import { colors, participants } from '../../../../services/ServiceInfo';
import { Layout } from '../../../common/Layout';
import { useGetWidthSize } from '../../../hooks/useGetWidthSize';

const Participants = lazy(() => import('./Participants'));
const SliderTeam = lazy(() => import('./SliderTeam'));

const Team = () => {
  const isMobile = useGetWidthSize(768);

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
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-28">
          <Suspense fallback={<div>Cargando...</div>}>
            {isMobile ? (
              <SliderTeam />
            ) : (
              <>
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
              </>
            )}
          </Suspense>
        </div>
      </section>
    </Layout>
  );
};

export { Team };
