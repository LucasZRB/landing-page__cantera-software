import React from 'react';
import { Input } from './Input';
import { Laout } from '../../../common/Laout';

const Contact = () => {
  return (
    <Laout className="mt-16">
      <section
        className="text-xl flex flex-col items-center justify-center max-w-7xl w-full"
        id="contact">
        <h2 className="text-blue_title text-[2.5rem] font-bold">Contacto</h2>
        <p className="mt-5 mb-14">
          Si te interesa saber más de nosotros, y/o quieres colaborar completa
          el siguiente formulario
        </p>
        <form action="" method="post" className="w-full max-w-[37rem]">
          <fieldset className="w-full relative pt-14 flex flex-col items-start">
            <legend className="text-3xl font-bold absolute top-0">
              Contacta con nosotros
            </legend>

            <Input
              id={'nombreApellido'}
              placeholder={'Nombre y Apellido'}
              aria={'nombreTooltip'}
              title={'Ingresa tu nombre y apellido'}
            />

            <Input
              type="email"
              id={'email'}
              placeholder={'Email'}
              aria={'emailTooltip'}
              title={'Ingresa tu dirección de correo electrónico'}
            />

            <Input
              id={'asunto'}
              placeholder={'Asunto'}
              aria={'easuntoTooltip'}
              title={'Ingresa el asunto de tu mensaje'}
            />

            <Input
              type="textarea"
              id={'mensaje'}
              placeholder={'Mensaje...'}
              aria={'mensajeTooltip'}
              title={'Ingresa tu mensaje'}
            />

            <div className="pt-4 pb-14 m-auto">reCaptcha</div>

            <input
              className="font-bold m-auto bg-main_green hover:bg-green_hover focus:outline-green_focus text-pure_white no-underline border-none py-3 px-20 rounded-full cursor-pointer transition-colors ease-linear duration-300"
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
    </Laout>
  );
};

export { Contact };
