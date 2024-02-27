import React from 'react';
import { Image } from '../../common/Image';
import { Abbr } from '../../common/alternativeText/Abbr';
import { Laout } from '../../common/Laout';

const AboutUs = () => {
  return (
    <Laout className="py-[8.438rem] bg-section1">
      <section className="max-w-7xl w-full text-ct-base">
        <h2 className="text-blue_title text-ct-sub-title font-bold py-12">
          Sobre nosotros
          <span className="sr-only">:</span>
        </h2>
        <p>
          Somos un equipo de apasionados profesionales en{' '}
          <Abbr
            abbr={'IT'}
            fullWord={'Informática'}
            isShowSrOnly
            descriptionSrOnly='informática, también conocida como "aiti"'
          />{' '}
          con una misión clara: proporcionar una educación en tecnología
          accesible para todos y forjar profesionales completos, respaldados por
          un sólido soporte técnico, mentores tecnológicos, asesores
          psicológicos y expertos en desarrollo de habilidades blandas.
        </p>
        <div className="flex items-center justify-center gap-8 mt-16">
          <div className="flex flex-col flex-1 gap-6 text-start">
            <p>
              Colaboramos estrechamente con fundaciones de <b>Argentina</b> y{' '}
              <b>España</b>, que se encuentran comprometidas para identificar y
              apoyar a talentos prometedores que, de otra manera, no tendrían
              acceso a formación en tecnología.
            </p>
            <p>
              Nos comprometemos a proporcionar becas educativas que van más allá
              del respaldo financiero, creando un entorno de aprendizaje
              innovador y colaborativo. Buscamos formar a la próxima generación
              de expertos en tecnología, dotándolos de habilidades sólidas y
              fomentando valores de compromiso, perseverancia y excelencia.
            </p>
            <p>
              A su vez, nuestro trabajo no sólo contribuye al crecimiento
              sostenible de la industria tecnológica, sino que también deja una
              huella positiva y duradera en la vida de nuestros estudiantes y en
              la sociedad en su conjunto.
            </p>
          </div>
          <Image
            src={'../../../public/images/Sobrenosotros.png'}
            width={'flex-1 max-w-[38.75rem] w-full max-h-96 h-full'}
          />
        </div>
      </section>
    </Laout>
  );
};

export { AboutUs };
