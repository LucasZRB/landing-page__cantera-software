import React from 'react';
import { Abbr } from '../../../../components/common/alternativeText/Abbr';
import { ItemCheck } from '../../../common/Item/ItemCheck';
/* spell-checker: disable */

const Cards = () => {
  return [
      <>
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
          Para esto evaluamos los perfiles de los alumnos y disponemos de becas
          para que puedan acceder a un nivel de educación que de otra manera no
          podrían alcanzar.
        </p>
        <p>¿Querés sumar las capacitaciones de La Cantera a tu red?</p>
      </>,
      <>
        <span className="text-blue_title font-bold">
          Empresas
          <span className="sr-only">:</span>
        </span>
        <p className="mt-5 mb-6">
          Tú y tu empresa pueden ser parte de este gran sueño y ser la fuerza
          que impulse a más personas hacia una educación de calidad, permitiendo
          a nuestros alumnos construir un futuro sólido en la industria
          tecnológica. Hay diversas formas de colaborar:
        </p>

        <ul>
          <li>
            <ItemCheck term={'Apoyo Financiero'} />
          </li>
          <li>
            <ItemCheck term={'Donación de Dispositivos'} />
          </li>
          <li>
            <ItemCheck term={'Oportunidades Laborales'} />
          </li>
          <li>
            <ItemCheck term={'Mentoría y Formación'} />
          </li>
        </ul>

        <p className="mt-6 mb-7">
          Únete a nosotros en la misión de transformar vidas a través de la
          educación en tecnología. Tu colaboración es clave para construir mejor
          futuro para todos.
        </p>
      </>
  ];
};

export { Cards };
