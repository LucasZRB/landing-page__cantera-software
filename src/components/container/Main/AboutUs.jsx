import React from 'react';
import { Image } from '../../common/Image';
import { Abbr } from '../../common/alternativeText/Abbr';
import { Laout } from '../../common/Laout';

const AboutUs = () => {
  return (
    <Laout className="py-[8.438rem] bg-section1">
      <section
        className="grid gap-12 max-w-7xl w-full text-ct-base"
        id="about-us"
        style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <h2
          className="text-blue_title text-ct-sub-title font-bold"
          style={{ gridColumn: 'span 2' }}>
          Sobre nosotros
          <span className="sr-only">:</span>
        </h2>
        <p style={{ gridColumn: 'span 2' }}>
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
        <div
          className="grid gap-8 justify-items-center items-center"
          style={{
            gridColumn: 'span 2',
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}>
          <div
            className="grid gap-6 justify-items-center items-center text-start"
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 3',
              gridTemplateRows: 'repeat(3, auto)'
            }}>
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
            style={{ gridColumn: 'span 1', gridRow: 'span 3' }}
            src={'./src/assets/images/decoratives/aboutUsImg.png'}
            width={'max-w-[38.75rem] w-full max-h-96 h-full'}
          />
        </div>
      </section>
    </Laout>
  );
};

export { AboutUs };
