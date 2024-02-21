import React from "react";
import { Button } from "./Button";


const InfoColaboretion = () => {
    return(
      <section className="mt-11 text-xl" id="info-colaboration">
      <h2 className="text-blue_title text-[2.5rem] font-bold">¿Cómo colaborar?</h2>
      <p className="mt-4 mb-8">En La Cantera, creemos en la fuerza de la colaboración para alcanzar metas más grandes y extender nuestra red de impacto. Tu ayuda y colaboración son esenciales para llevar la educación en tecnología a nuevos horizontes. Descubre cómo puedes ser parte de esta transformación</p>

      <div className="text-start">
        <div className="flex mb-24">
          <div className="flex-1">
            <span className="text-blue_title font-bold">
              Fundaciones y {''}
              <abbr title="Organización No Gubernamental">ONG</abbr>
              <span className="sr-only"> (Organización No Gubernamental)</span>
            </span>
            <p className="mt-5">Trabajamos con distintas fundaciones para promover el acceso a la educación a jóvenes adultos que se encuentran en situaciones vulnerables</p>
            <p className="my-6">Para esto evaluamos los perfiles de los alumnos y disponemos de becas para que puedan acceder a un nivel de educación que de otra manera no podrían alcanzar.</p>
            <p className="mb-7">¿Querés sumar las capacitaciones de La Cantera a tu red?</p>

            <Button message={"Contáctanos"} px={"px-11"} py={"py-3"} />
          </div>

          <figure className="flex-1" aria-hidden="true">
            <img src="../../../public/images/Comocolaborarimagen1.png" alt="corrección" title="corrección"/>
          </figure>
        </div>

        <div className="flex">
          <figure className="flex-1" aria-hidden="true">
            <img src="../../../public/images/Comocolaborar.png" alt=""/>
          </figure>

          <div className="flex-1">
            <span className="text-blue_title font-bold">Empresas</span>
            <p className="mt-5 mb-6">Tú y tu empresa pueden ser parte de este gran sueño y ser la fuerza que impulse a más personas hacia una educación de calidad, permitiendo a nuestros alumnos construir un futuro sólido en la industria tecnológica. Hay diversas formas de colaborar:</p>

            <ul>
              <li>
                <div className="flex mb-5 items-center justify-center">
                  <span className="mr-5" aria-hidden="true">✔️</span>
                  <p className=""><b>Apoyo Financiero:</b> Contribuye directamente al éxito educativo proporcionando becas y recursos necesarios</p>
                </div>
              </li>
              <li>
                <div className="flex mb-5 items-center justify-center">
                  <span className="mr-5" aria-hidden="true">✔️</span>
                  <p><b>Donación de Dispositivos:</b> Facilita el acceso a la tecnología donando dispositivos esenciales para el aprendizaje.</p>
                </div>
              </li>
              <li>
                <div className="flex mb-5 items-center justify-center ">
                  <span className="mr-5" aria-hidden="true">✔️</span>
                  <p className=""><b>Oportunidades Laborales:</b> Abre puertas para el crecimiento profesional ofreciendo pasantías rentadas a nuestros talentosos egresados.</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <span className="mr-5" aria-hidden="true">✔️</span>
                  <p className=""><b>Mentoría y Formación:</b> Comparte tu experiencia guiando a los estudiantes a través de programas de mentorías.</p>
                </div>
              </li>
            </ul>

            <p className="mt-6 mb-7">Únete a nosotros en la misión de transformar vidas a través de la educación en tecnología. Tu colaboración es clave para construir mejor futuro para todos</p>
            <Button message={"Contáctanos"} px={"px-11"} py={"py-3"} />
          </div>
        </div>
      </div>
    </section>
    )
};

export {InfoColaboretion};