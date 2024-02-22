import React from 'react';
import { Image } from '../../common/Image';
import { Abbr } from '../../common/alternativeText/Abbr';

const AboutUs = () => {
  return (
    <section className="mb-24 text-xl bg-cover bg-no-repeat bg-center bg-gradient-to-tr from-white_hover to-pure_white p-5">
      <h2 className="text-blue_title text-[2.5rem] font-bold mb-4">
        Sobre nosotros
      </h2>
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
      <div className="flex items-center justify-center gap-8 mt-16">
        <div className="flex flex-col flex-1 gap-6">
          <p>
            Colaboramos estrechamente con fundaciones comprometidas para
            identificar y apoyar a talentos prometedores que, de otra manera, no
            tendrían acceso a formación en tecnología
          </p>
          <p>
            Nos comprometemos a proporcionar becas educativas que van más allá
            del respaldo financiero, creando un entorno de aprendizaje innovador
            y colaborativo. Buscamos formar a la próxima generación de expertos
            en tecnología, dotándolos de habilidades sólidas y fomentando
            valores de compromiso, perseverancia y excelencia
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
          width={'flex-1'}
        />
      </div>
    </section>
  );
};

export { AboutUs };
