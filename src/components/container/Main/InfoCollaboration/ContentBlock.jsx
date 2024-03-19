import React from 'react';
import { LazyImage } from '../../../common/LazyImage';
import { Button } from '../../../common/button/Button';
import { ItemCheck } from '../../../common/items/ItemCheck';
import { Abbr } from '../../../common/alternativeText/Abbr';
import './ContentBlock.css';

const ContentBlock = () => {
  return (
    <div className="info-collaboration__content">
      <div className="info-collaboration__block">
        <div className="info-collaboration__column">
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

          <Button message={'Contáctanos'} px={'px-11'} py={'py-3'} />
        </div>

        <LazyImage
          src="./images/decoratives/collaboretionImg-A.png"
          figureClass="max-w-[37.5rem] max-h-[30rem] w-full h-full"
        />
      </div>

      <div className="info-collaboration__block">
        <LazyImage
          src="./images/decoratives/collaboretionImg-B.png"
          figureClass="max-w-[38.75rem] w-full h-full"
        />

        <div className="info-collaboration__column">
          <span className="text-blue_title font-bold">
            Empresas
            <span className="sr-only">:</span>
          </span>
          <p>
            Tú y tu empresa pueden ser parte de este gran sueño y ser la fuerza
            que impulse a más personas hacia una educación de calidad,
            permitiendo a nuestros alumnos construir un futuro sólido en la
            industria tecnológica. Hay diversas formas de colaborar:
          </p>

          <ul>
            <li>
              <ItemCheck
                term={'Apoyo Financiero'}
                definition={
                  'Contribuye directamente al éxito educativo proporcionando becas y recursos necesarios.'
                }
              />
            </li>
            <li>
              <ItemCheck
                term={'Donación de Dispositivos'}
                definition={
                  'Facilita el acceso a la tecnología donando dispositivos esenciales para el aprendizaje.'
                }
              />
            </li>
            <li>
              <ItemCheck
                term={'Oportunidades Laborales'}
                definition={
                  'Abre puertas para el crecimiento profesional ofreciendo pasantías rentadas a nuestros talentosos egresados.'
                }
              />
            </li>
            <li>
              <ItemCheck
                term={'Mentoría y Formación'}
                definition={
                  'Comparte tu experiencia guiando a los estudiantes a través de programas de mentorías.'
                }
              />
            </li>
          </ul>

          <p>
            Únete a nosotros en la misión de transformar vidas a través de la
            educación en tecnología. Tu colaboración es clave para construir
            mejor futuro para todos.
          </p>
          <Button message={'Contáctanos'} px={'px-11'} py={'py-3'} />
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
