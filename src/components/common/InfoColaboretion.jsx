import React from "react";


const InfoColaboretion = () => {
    return(
      <section className="" id="info-colaboration">
      <h2 className="">¿Cómo colaborar?</h2>
      <p className="">En La Cantera, creemos en la fuerza de la colaboración para alcanzar metas más grandes y extender nuestra red de impacto. Tu ayuda y colaboración son esenciales para llevar la educación en tecnología a nuevos horizontes. Descubre cómo puedes ser parte de esta transformación</p>

      <div>
        <div>
          <div>
            <h3>
              Fundaciones y{' '}
              <abbr title="Organización No Gubernamental">ONG</abbr>
              <span className="sr-only"> (Organización No Gubernamental)</span>
            </h3>
            <p className="">Trabajamos con distintas fundaciones para promover el acceso a la educación a jóvenes adultos que se encuentran en situaciones vulnerables</p>
            <p className="">Para esto evaluamos los perfiles de los alumnos y disponemos de becas para que puedan acceder a un nivel de educación que de otra manera no podrían alcanzar.</p>
            <p className="">¿Querés sumar las capacitaciones de La Cantera a tu red?</p>

            <div className="">
              <a className="" href="#contact" aria-label="Botón Ir al formulario de contacto" role="button">
                Contáctanos
                <span className="sr-only"> Ir al formulario de contacto</span>
              </a>
            </div>
          </div>

          <figure className="" aria-hidden="true">
            <img src="../../../public/images/Comocolaborarimagen1.png" alt="corrección" title="corrección"/>
          </figure>
        </div>

        <div className="">
          <figure className="" aria-hidden="true">
            <img src="../../../public/images/Comocolaborar.png" alt=""/>
          </figure>

          <div className="">
            <h3 className="">Empresas</h3>
            <p className="">Tú y tu empresa pueden ser parte de este gran sueño y ser la fuerza que impulse a más personas hacia una educación de calidad, permitiendo a nuestros alumnos construir un futuro sólido en la industria tecnológica. Hay diversas formas de colaborar:</p>

            <ul>
              <li>
                <div className="">
                  <span className="" aria-hidden="true">✔️</span>
                  <p><b>Apoyo Financiero:</b> Contribuye directamente al éxito educativo proporcionando becas y recursos necesarios</p>
                </div>
              </li>
              <li>
                <div className="">
                  <span className="" aria-hidden="true">✔️</span>
                  <p><b>Donación de Dispositivos:</b> Facilita el acceso a la tecnología donando dispositivos esenciales para el aprendizaje.</p>
                </div>
              </li>
              <li>
                <div className="">
                  <span className="" aria-hidden="true">✔️</span>
                  <p><b>Oportunidades Laborales:</b> Abre puertas para el crecimiento profesional ofreciendo pasantías rentadas a nuestros talentosos egresados.</p>
                </div>
              </li>
              <li>
                <div className="">
                  <span className="" aria-hidden="true">✔️</span>
                  <p><b>Mentoría y Formación:</b> Comparte tu experiencia guiando a los estudiantes a través de programas de mentorías.</p>
                </div>
              </li>
            </ul>

            <p className="">Únete a nosotros en la misión de transformar vidas a través de la educación en tecnología. Tu colaboración es clave para construir mejor futuro para todos</p>
            <div className="">
              <a className="" href="#contacto" aria-label="Botón Ir al formulario de contacto" role="button">
                Contáctanos
                <span className="sr-only"> Ir al formulario de contacto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
};

export {InfoColaboretion};