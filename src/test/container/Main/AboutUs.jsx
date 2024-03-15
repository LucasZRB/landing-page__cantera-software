import React from 'react';
import { Layout } from '../../common/Layout';
import { Abbr } from '../../../components/common/alternativeText/Abbr';
import { LazyImage } from '../../common/LazyImage';
import { ExpandableText } from '../../common/alternativeText/ExpandableText';
import { useGetWidthSize } from '../../hooks/useGetWidthSize';
import './AboutUs.css';
/* spell-checker: disable */

const AboutUs = () => {
  const isMobile = useGetWidthSize(480);

  const optionsImage = {
    src: `./images/decoratives/aboutUsImg${
      isMobile ? 'Mobile' : 'Desktop'
    }.png`,
    figureClass: `max-w-[38.75rem] w-full ${
      isMobile ? 'aspect-[283/173]' : 'h-full desktop-aboutAs__image'
    }`
  };

  const buttonOptions = {
    shortText: (
      <>
        <p className={`${isMobile ? 'text-start' : 'text-center'}`}>
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
        {isMobile ? (
          <p className="text-start">
            Colaboramos estrechamente con fundaciones de <b>Argentina</b> y{' '}
            <b>España</b>, que se encuentran comprometidas para identificar y
            apoyar a talentos prometedores que, de otra manera, no tendrían
            acceso a formación en tecnología.
          </p>
        ) : null}
      </>
    ),
    longText: (
      <div className="desktop-aboutAs__content grid gap-8 justify-items-center items-center">
        <div className="desktop-aboutAs__paragraphs grid gap-6 justify-items-center items-center text-start">
          {!isMobile ? (
            <p className="text-start">
              Colaboramos estrechamente con fundaciones de <b>Argentina</b> y{' '}
              <b>España</b>, que se encuentran comprometidas para identificar y
              apoyar a talentos prometedores que, de otra manera, no tendrían
              acceso a formación en tecnología.
            </p>
          ) : null}
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
        {isMobile ? null : <LazyImage {...optionsImage} />}
      </div>
    ),
    buttonProps: {
      ariaId: 'readMore-aboutUs'
    }
  };

  return (
    <Layout className="bg-section1 w-full">
      <section
        id="about-us"
        tabIndex={-1}
        className="size-section flex flex-col gap-6 justify-center items-center text-ct-base">
        <h2 className="text-blue_title text-ct-sub-title">
          Sobre nosotros
          <span className="sr-only">:</span>
        </h2>
        {isMobile ? (
          <>
            <ExpandableText {...buttonOptions} />
            <LazyImage {...optionsImage} />
          </>
        ) : (
          <>
            {buttonOptions.shortText}
            {buttonOptions.longText}
          </>
        )}
      </section>
    </Layout>
  );
};

export { AboutUs };
