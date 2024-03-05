import React from 'react';
import { Layout } from '../../common/Layout';
import { Abbr } from '../../../components/common/alternativeText/Abbr';
import { Button } from '../../common/button/Button';
/* spell-checker: disable */
// TODO: Dar vuelta tarjeta, y leer más

const InfoCollaboretion = () => {
  return (
    <Layout className="bg-pure_white w-full">
      <section
        id="info-collaboration"
        className="flex flex-col text-ct-base min-w-ct-min w-full">
        <h2 className="text-blue_title text-ct-sub-title">
          ¿Cómo colaborar?
        </h2>
        <p className="mt-4 mb-8">
          En La Cantera, creemos en la fuerza de la colaboración para alcanzar
          metas más grandes y extender nuestra red de impacto. Tu ayuda y
          colaboración son esenciales para llevar la educación en tecnología a
          nuevos horizontes. Descubre cómo puedes ser parte de esta
          transformación.
        </p>

        <div className="border-2 p-8 pt-4 rounded-xl">
          <div className='flex flex-col gap-4 justify-center items-center'>
            <span className='text-blue_title font-bold'>
              Fundaciones y {''}
              <Abbr
                abbr={'ONG'}
                fullWord={'Organización No Gubernamental'}
                isShowSrOnly
                hasHiddenParentheses={false}
                ariaHidden={false}
              />
            </span>
            <p>
              Trabajamos con distintas fundaciones para promover el acceso a la
              educación a jóvenes adultos que se encuentran en situaciones
              vulnerables.
            </p>
            <p>
              Para esto evaluamos los perfiles de los alumnos y disponemos de
              becas para que puedan acceder a un nivel de educación que de otra
              manera no podrían alcanzar.
            </p>
            <p>¿Querés sumar las capacitaciones de La Cantera a tu red?</p>

            <Button menssage={"Contáctanos"} px={'px-11'} py={'py-3'} />
            <div className='bg-main_green text-pure_white rounded-full'></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export {InfoCollaboretion};