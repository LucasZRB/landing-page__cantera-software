import React from 'react';

const Contact = () => {
  return (
    <section
      className="mt-16 text-xl flex flex-col items-center justify-center"
      id="contact">
      <h2 className="text-blue_title text-[2.5rem] font-bold">Contacto</h2>
      <p className="mt-5 mb-14">
        Si te interesa saber más de nosotros, y/o quieres colaborar completa el
        siguiente formulario
      </p>
      <form action="" method="post" className="w-full max-w-[37rem]">
        <fieldset className="w-full relative pt-14 flex flex-col items-start">
          <legend className="text-3xl font-bold absolute top-0">
            Contacta con nosotros
          </legend>
          <div className="relative w-full">
            <input
              className="w-full p-3 mt-3 border-b-2 border-green_focus bg-transparent transition-colors focus:outline-none focus:border-b-main_green"
              type="text"
              id="nombreApellido"
              name="nombreApellido"
              placeholder="Nombre y Apellido"
              required
              aria-describedby="nombreTooltip"
              title="Ingresa tu nombre y apellido"
            />
            <span className="sr-only" id="nombreTooltip">
              Ingresa tu nombre y apellido
            </span>
          </div>
          <div className="w-full relative">
            <input
              className="w-full p-3 mt-3 border-b-2 border-green_focus bg-transparent transition-colors focus:outline-none focus:border-b-main_green"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              aria-describedby="emailTooltip"
              title="Ingresa tu dirección de correo electrónico"
            />
            <span className="sr-only" id="emailTooltip">
              Ingresa tu dirección de correo electrónico
            </span>
          </div>
          <div className="w-full relative">
            <input
              className="w-full p-3 mt-3 border-b-2 border-green_focus bg-transparent transition-colors focus:outline-none focus:border-b-main_green"
              type="text"
              id="asunto"
              name="asunto"
              placeholder="Asunto"
              required
              aria-describedby="asuntoTooltip"
              title="Ingresa el asunto de tu mensaje"
            />
            <span className="sr-only" id="asuntoTooltip">
              Ingresa el asunto de tu mensaje
            </span>
          </div>
          <div className="w-full relative">
            <textarea
              className="w-full p-3 mt-3 border-b-2 border-green_focus bg-transparent transition-colors focus:outline-none focus:border-b-main_green"
              name="mensaje"
              id="mensaje"
              placeholder="Mensaje..."
              rows="4"
              required
              aria-describedby="mensajeTooltip"
              title="Ingresa tu mensaje"></textarea>
            <span className="sr-only" id="mensajeTooltip">
              Ingresa tu mensaje
            </span>
          </div>
          <div className="pt-4 pb-14 m-auto">reCaptcha</div>
          <input
            className="font-bold m-auto bg-main_green hover:bg-green_hover focus:outline-green_focus text-pure_white no-underline border-none py-3 px-20 rounded-full cursor-pointer transition-colors"
            type="submit"
            value={'Enviar'}
            aria-describedby="enviarTooltip"
            title="Enviar formulario"
          />
          <span className="sr-only" id="enviarTooltip">
            Enviar formulario
          </span>
        </fieldset>
      </form>
    </section>
  );
};

export { Contact };
