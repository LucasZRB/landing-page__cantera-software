import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <section class="" aria-label="Sobre nosotros">
        <h2 className="">Sobre nosotros</h2>
        <p className="">
          Somos un equipo de apasionados profesionales en{' '}
          <abbr className="" aria-hidden="true" title="Informática">
            IT
          </abbr>
          <span className="hidden"> (</span>
          <span className="sr-only">informática, también conocida como "aiti"</span>
          <span className="hidden">)</span>
          {' '}con una misión clara: proporcionar una educación en tecnología
          accesible para todos y forjar profesionales completos, respaldados por
          un sólido soporte técnico, mentores tecnológicos, asesores
          psicológicos y expertos en desarrollo de habilidades blandas.
        </p>
        <div className="">
          <div className="">
            <p>
              Colaboramos estrechamente con fundaciones comprometidas para
              identificar y apoyar a talentos prometedores que, de otra manera,
              no tendrían acceso a formación en tecnología
            </p>
            <p>
              Nos comprometemos a proporcionar becas educativas que van más allá
              del respaldo financiero, creando un entorno de aprendizaje
              innovador y colaborativo. Buscamos formar a la próxima generación
              de expertos en tecnología, dotándolos de habilidades sólidas y
              fomentando valores de compromiso, perseverancia y excelencia
            </p>
            <p>
              A su vez, nuestro trabajo no sólo contribuye al crecimiento
              sostenible de la industria tecnológica, sino que también deja una
              huella positiva y duradera en la vida de nuestros estudiantes y en
              la sociedad en su conjunto.
            </p>
          </div>
          <div>
            <img src="../../../public/images/Sobrenosotros.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export { AboutUs };
