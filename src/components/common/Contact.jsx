import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>
        Si te interesa saber más de nosotros, y/o quieres colaborar completa el
        siguiente formulario
      </p>
      <form action="" method="post">
        <fieldset>
          <legend>Contacta con nosotros</legend>
          <div>
            <input
              type="text"
              id="nombreApellido"
              name="nombreApellido"
              placeholder="Nombre y Apellido"
              required
              aria-describedby="nombreTooltip"
              title="Ingresa tu nombre y apellido"
            />
            <span className="" id="nombreTooltip">
              Ingresa tu nombre y apellido
            </span>
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              aria-describedby="emailTooltip"
              title="Ingresa tu dirección de correo electrónico"
            />
            <span className="" id="emailTooltip">
              Ingresa tu dirección de correo electrónico
            </span>
          </div>
          <div>
            <input
              type="text"
              id="asunto"
              name="asunto"
              placeholder="Asunto"
              required
              aria-describedby="asuntoTooltip"
              title="Ingresa el asunto de tu mensaje"
            />
            <span className="" id="asuntoTooltip">
              Ingresa el asunto de tu mensaje
            </span>
          </div>
          <div>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Mensaje..."
              rows="4"
              required
              aria-describedby="mensajeTooltip"
              title="Ingresa tu mensaje"></textarea>
            <span className="" id="mensajeTooltip">
              Ingresa tu mensaje
            </span>
          </div>
          <div>reCaptcha</div>
          <input
            type="submit"
            value={'Enviar'}
            aria-describedby="enviarTooltip"
            title="Enviar formulario"
          />
          <span className="" id="enviarTooltip">
            Enviar formulario
          </span>
        </fieldset>
      </form>
    </section>
  );
};

export { Contact };
