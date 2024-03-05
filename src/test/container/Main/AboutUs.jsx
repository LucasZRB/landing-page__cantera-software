import React from 'react';
import { Layout } from '../../common/Layout';
import { Abbr } from '../../../components/common/alternativeText/Abbr';
import { LazyImage } from '../../common/LazyImage';
import { ExpandableText } from '../../common/alternativeText/ExpandableText';
/* spell-checker: disable */

const AboutUs = () => {
  const optionsImage = {
    src: './images/decoratives/aboutUsImgMobile.png',
    figureClass: 'max-w-[38.75rem] w-full max-h-96 h-full'
  };

  const buttonOptions = {
    shortText: (
      <p>
        Somos un equipo de apasionados profesionales en{' '}
        <Abbr
          abbr={'IT'}
          fullWord={'Informática'}
          isShowSrOnly
          descriptionSrOnly='informática, también conocida como "aiti"'
        />{' '}
        con una misión clara: proporcionar una educación en tecnología accesible
        para todos y forjar profesionales completos, respaldados por un sólido
        soporte técnico, mentores tecnológicos, asesores psicológicos y expertos
        en desarrollo de habilidades blandas.
      </p>
    ),
    longText: (
      <div className="flex pt-6 gap-8 justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center">
          <p>
            Colaboramos estrechamente con fundaciones de <b>Argentina</b> y{' '}
            <b>España</b>, que se encuentran comprometidas para identificar y
            apoyar a talentos prometedores que, de otra manera, no tendrían
            acceso a formación en tecnología.
          </p>
          <p>
            Nos comprometemos a proporcionar becas educativas que van más allá
            del respaldo financiero, creando un entorno de aprendizaje innovador
            y colaborativo. Buscamos formar a la próxima generación de expertos
            en tecnología, dotándolos de habilidades sólidas y fomentando
            valores de compromiso, perseverancia y excelencia.
          </p>
          <p>
            A su vez, nuestro trabajo no sólo contribuye al crecimiento
            sostenible de la industria tecnológica, sino que también deja una
            huella positiva y duradera en la vida de nuestros estudiantes y en
            la sociedad en su conjunto.
          </p>
        </div>
      </div>
    ),
    buttonProps: {
      px: 'px-9',
      py: 'py-3 my-6',
      ariaId: 'readMore-aboutUs'
    }
  };

  return (
    <Layout className="bg-section1 w-full">
      <section
        id="about-us"
        className="flex min-w-ct-min w-full flex-col justify-center items-center text-ct-base text-start">
        <h2 className="text-blue_title pb-6 text-ct-sub-title">
          Sobre nosotros
          <span className="sr-only">:</span>
        </h2>
        <ExpandableText
          {...buttonOptions}
        />
        <LazyImage {...optionsImage} />
      </section>
    </Layout>
  );
};

export { AboutUs };
