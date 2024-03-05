import React from 'react';
import { Layout } from '../../../common/Layout';
import { Button2 } from '../../../common/button/Button2';

// TODO: Falta hacer todo, y alertas arriba

const Contact = () => {
  const handleSubmit = async event => {
    event.preventDefault();
  }

  return (
    <Layout className="bg-pure_white w-full">
      <section
        id="contact"
        className="text-ct-base flex flex-col items-center justify-center min-w-ct-min w-full">
        <h2 className="text-blue_title text-ct-sub-title">
          Contacto<span className="sr-only">:</span>
        </h2>
        <p className="mt-5 mb-14">
          Si te interesa saber más de nosotros, y/o quieres colaborar completa
          el siguiente formulario.
        </p>
        <form onSubmit={handleSubmit} className="w-full min-w-ct-min max-w-[37rem]">
          <fieldset className="w-full relative flex flex-col items-start border-2 p-8 pt-0 rounded-xl">
            <input
              className="w-full p-3 mt-3 border-b-solid border-b-2 border-green_focus bg-transparent"
              type="text"
              placeholder="text"
            />
            <input
              className="w-full p-3 mt-3 border-b-solid border-b-2 border-green_focus bg-transparent"
              type="text"
              placeholder="text2"
            />

            <div className="mt-4 mb-7 px-2 py-3 bg-white_hover m-auto">
              Captcha
            </div>

            <Button2
              px={'px-20'}
              py={'py-3'}
              type="submit"
              isDisable={false}
              ariaId={'send'}
              title={'Enviar formulario.'}
              message={'Enviar'}
            />
            <span className="sr-only" id="sendTooltip">
              Enviar formulario
            </span>
          </fieldset>
        </form>
      </section>
    </Layout>
  );
};

export { Contact };
