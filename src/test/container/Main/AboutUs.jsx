import React from 'react';
import { Laout } from '../../common/Laout';
import { Abbr } from "../../../components/common/alternativeText/Abbr";
import { Button2 } from '../../common/button/Button2';
import { LazyImage } from '../../common/LazyImage';

const AboutUs = () => {
  const optionsImage = {
    src: './images/decoratives/aboutUsImgMobile.png',
    figureClass: 'max-w-[38.75rem] w-full max-h-96 h-full'
  };

  return (
    <Laout className="bg-section1 w-full">
      <section
        id="about-us"
        className="flex min-w-ct-min w-full flex-col justify-center items-center gap-12 text-ct-base text-start">
        <h2 className="text-blue_title text-ct-sub-title">
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
        <Button2
          px={'px-9'}
          py={'py-3'}
          message={'Leer Más...'}
          description={'Leer Más...'}
          title={'Leer Más...'}
          ariaId={'readMore-aboutUs'}
        />
        <LazyImage {...optionsImage} />
        <div className="flex gap-8 justify-center items-center">
          <div className="flex flex-col gap-6 justify-center items-center">
            <p className="">
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
        </div>
      </section>
    </Laout>
  );
};

export { AboutUs };
