import React from 'react';
import { Button } from '../../common/button/Button';
import { Abbr } from '../../common/alternativeText/Abbr';
import { ItemCheck } from '../../common/items/ItemCheck';
import { Image } from '../../common/Image';
import { Laout } from '../../common/Laout';

const InfoCollaboretion = () => {
  return (
    <Laout>
      <section className="grid text-ct-base max-w-7xl w-full" id="info-collaboration" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <h2 className="text-blue_title text-ct-sub-title font-bold" style={{ gridColumn: 'span 2' }}>
          ¿Cómo colaborar?
        </h2>
        <p className="mt-4 mb-8" style={{ gridColumn: 'span 2' }}>
          En La Cantera, creemos en la fuerza de la colaboración para alcanzar
          metas más grandes y extender nuestra red de impacto. Tu ayuda y
          colaboración son esenciales para llevar la educación en tecnología a
          nuevos horizontes. Descubre cómo puedes ser parte de esta
          transformación.
        </p>

        <div className="grid gap-24 text-start" style={{ gridColumn: 'span 2', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="grid gap-8 items-stretch" style={{ gridColumn: 'span 2', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="flex flex-col justify-between items-start">
              <span className="text-blue_title font-bold">
                Fundaciones y {''}
                <Abbr
                  abbr={'ONG'}
                  fullWord={'Organización No Gubernamental'}
                  isShowSrOnly
                  hasHiddenParentheses={false}
                  ariaHidden={false}
                />
              </span>
              <p className="mt-5">
                Trabajamos con distintas fundaciones para promover el acceso a
                la educación a jóvenes adultos que se encuentran en situaciones
                vulnerables.
              </p>
              <p className="my-6">
                Para esto evaluamos los perfiles de los alumnos y disponemos de
                becas para que puedan acceder a un nivel de educación que de
                otra manera no podrían alcanzar.
              </p>
              <p className="mb-7">
                ¿Querés sumar las capacitaciones de La Cantera a tu red?
              </p>

              <Button message={'Contáctanos'} px={'px-11'} py={'py-3'} />
            </div>

            <Image
              width={' max-w-[37.5rem] max-h-[30rem] w-full h-full'}
              src={'./src/assets/images/decoratives/collaboretionImg-A.png'}
            />
          </div>

          <div className="grid gap-8 items-stretch" style={{ gridColumn: 'span 2', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Image
              width={' max-w-[38.75rem] w-full h-full'}
              src={'./src/assets/images/decoratives/collaboretionImg-B.png'}
            />

            <div className="">
              <span className="text-blue_title font-bold">Empresas
              <span className='sr-only'>:</span></span>
              <p className="mt-5 mb-6">
                Tú y tu empresa pueden ser parte de este gran sueño y ser la
                fuerza que impulse a más personas hacia una educación de
                calidad, permitiendo a nuestros alumnos construir un futuro
                sólido en la industria tecnológica. Hay diversas formas de
                colaborar:
              </p>

              <ul>
                <li>
                  <ItemCheck
                    term={'Apoyo Financiero:'}
                    definition={
                      'Contribuye directamente al éxito educativo proporcionando becas y recursos necesarios.'
                    }
                  />
                </li>
                <li>
                  <ItemCheck
                    term={'Donación de Dispositivos:'}
                    definition={
                      'Facilita el acceso a la tecnología donando dispositivos esenciales para el aprendizaje.'
                    }
                  />
                </li>
                <li>
                  <ItemCheck
                    term={'Oportunidades Laborales:'}
                    definition={
                      'Abre puertas para el crecimiento profesional ofreciendo pasantías rentadas a nuestros talentosos egresados.'
                    }
                  />
                </li>
                <li>
                  <ItemCheck
                    term={'Mentoría y Formación:'}
                    definition={
                      'Comparte tu experiencia guiando a los estudiantes a través de programas de mentorías.'
                    }
                  />
                </li>
              </ul>

              <p className="mt-6 mb-7">
                Únete a nosotros en la misión de transformar vidas a través de
                la educación en tecnología. Tu colaboración es clave para
                construir mejor futuro para todos.
              </p>
              <Button message={'Contáctanos'} px={'px-11'} py={'py-3'} />
            </div>
          </div>
        </div>
      </section>
    </Laout>
  );
};

export { InfoCollaboretion };
