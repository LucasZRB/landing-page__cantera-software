import React, { useState } from 'react';
import ReCaptcha from '@matt-block/react-recaptcha-v2';
import { Input } from './Input';
import { Laout } from '../../../common/Laout';
import { Notification } from '../../../common/notifications/Notification';
import { TextAnimation } from '../../../common/TextAnimation';

const Contact = () => {
  const [validCaptcha, setValidCaptcha] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [notifications, setNotifications] = useState([]);

  const removeNotif = id => setNotifications(prev => prev.filter(n => n.id !== id));

  const addNotification = (type, text) => {
    setNotifications(prevNotification => [
      {
        type,
        id: Math.random(),
        text
      },
      ...prevNotification
    ]);
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const fullNamePattern =
      /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ']+\s[A-Za-záéíóúüñÁÉÍÓÚÜÑ']+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hispanicPattern = /^[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?()\s]+$/;

    const validationRules = {
      fullName: {
        pattern: fullNamePattern,
        errorMessage: 'Por favor, ingresa tu nombre y apellido (Solo letras y espacios)'
      },
      email: {
        pattern: emailPattern,
        errorMessage: 'Por favor, ingresa una dirección de correo electrónico válida (Solo letras, números, puntos y guiones, seguido de un @ (arroba), subdominio (opcional), dominio, un punto y la parte final (.com, .org, .es. .ar, .co, etc.))'
      },
      subject: {
        pattern: hispanicPattern,
        errorMessage: 'Por favor, ingresa un asunto válido (Letras y caracteres dentro del teclado español)'
      },
      message: {
        pattern: hispanicPattern,
        errorMessage: 'Por favor, ingresa un mensaje válido (Letras y caracteres dentro del teclado español)'
      }
    }

    const validateField = fieldName => {
      const { pattern, errorMessage } = validationRules[fieldName];
      if (!pattern.test(formData[fieldName])) {
        addNotification('error', errorMessage);
        return false;
      }
      return true;
    }

    const validateAllFields = () => {
      const fieldsToValidate = ['fullName', 'email', 'subject', 'message'];
      for (const field of fieldsToValidate) {
        if (!formData[field] || !validCaptcha) {
          addNotification('error', 'Por favor, completa todos los campos y el reCaptcha');
          return false;
        }
        if (!validateField(field)) {
          return false;
        }
        return true;
      }
    }

    if (!validateAllFields()) return;

    const data = new FormData();

    data.append('nombre_completo', formData.fullName);
    data.append('email', formData.email);
    data.append('asunto', formData.subject);
    data.append('mensaje', formData.message);

    setIsloading(true);

    // try {
    //   fetch(
    //     `https://${import.meta.env.VITE_URL_EMAIL}/${
    //       import.meta.env.VITE_KEY_EMAIL
    //     }`,
    //     {
    //       method: 'POST',
    //       body: data
    //     }
    //   )
    //     .then(response => {
    //       console.log('Succes:');
    //       setNotifications(pv => [
    //         { type: 'success', id: Math.random(), text: 'Enviado con éxito!' },
    //         ...pv
    //       ]);
    //       setFormData({
    //         fullName: '',
    //         email: '',
    //         subject: '',
    //         message: ''
    //       });
    //     })
    //     .then(data => {
    //       setFormData({
    //         fullName: '',
    //         email: '',
    //         subject: '',
    //         message: ''
    //       });
    //     })
    //     .catch(error => {
    //       console.log('Error de envío:', error);
    //       setNotifications(pv => [
    //         {
    //           type: 'error', id: Math.random(),
    //           text: 'Algo salió mal al realizar el envío. Intentalo más tarde.'
    //         },
    //         ...pv
    //       ]);
    //     });
    // } catch (error) {
    //   console.error('Error al realizar la solicitud:', error);
    //   setNotifications(pv => [
    //     { type: 'error', id: Math.random(), text: 'Algo salió mal al realizar tu solicitud.' },
    //     ...pv
    //   ]);
    // } finally {
    //   setIsloading(false);
    // }

    setTimeout(() => {
      setIsloading(false);
      setNotifications(pv => [
        { type: 'success', id: Math.random(), text: 'Enviado con éxito!' },
        ...pv
      ]);
    }, 10000);
  };

  return (
    <Laout className="mt-16">
      <section
        className="text-xl flex flex-col items-center justify-center max-w-7xl w-full"
        id="contact">
        <h2 className="text-blue_title text-[2.5rem] font-bold">
          Contacto<span className="sr-only">:</span>
        </h2>
        <p className="mt-5 mb-14">
          Si te interesa saber más de nosotros, y/o quieres colaborar completa
          el siguiente formulario.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-[37rem]">
          <fieldset className="w-full relative pt-14 flex flex-col items-start">
            <legend className="text-3xl font-bold absolute top-0">
              Contacta con nosotros<span className="sr-only">:</span>
            </legend>

            <Input
              id={'fullName'}
              placeholder={'Nombre y Apellido'}
              aria={'fullNameTooltip'}
              title={'Ingresa tu nombre y apellido (Solo letras y espacios)'}
              pattern={"^[A-Za-záéíóúüñÁÉÍÓÚÜÑ']+\\s[A-Za-záéíóúüñÁÉÍÓÚÜÑ']+$"}
              value={formData.fullName}
              onChange={handleChange}
              readOnly={isLoading}
              autoCapitalize="words"
            />

            <Input
              type="email"
              id={'email'}
              placeholder={'Email'}
              aria={'emailTooltip'}
              title={
                'Ingresa tu dirección de correo electrónico (Solo letras, números, puntos y guiones, seguido de un @ (arroba), subdominio (opcional), dominio, un punto y la parte final (.com, .org, .es. .ar, .co, etc.))'
              }
              pattern={null}
              value={formData.email}
              onChange={handleChange}
              readOnly={isLoading}
              autoCapitalize="none"
            />

            <Input
              id={'subject'}
              placeholder={'Asunto'}
              aria={'subjectTooltip'}
              title={
                'Ingresa el asunto de tu mensaje (Solo letras y caracteres dentro del teclado español)'
              }
              pattern={"^[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?\\(\\)\\s]+$"}
              value={formData.subject}
              onChange={handleChange}
              readOnly={isLoading}
            />

            <Input
              type="textarea"
              id={'message'}
              placeholder={'Mensaje...'}
              aria={'messageTooltip'}
              title={
                'Ingresa tu mensaje (Solo letras y caracteres dentro del teclado español)'
              }
              pattern={"[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?\\(\\)\\s]+$"}
              value={formData.message}
              onChange={handleChange}
              readOnly={isLoading}
            />

            <div className="pt-4 pb-14 m-auto">
              <ReCaptcha
                siteKey={import.meta.env.VITE_TEST_KEY_RECAPTCHA}
                theme="light"
                size="normal"
                onSuccess={() => {
                  console.log(`Successful`);
                  setValidCaptcha(true);
                }}
                onError={() => {
                  setNotifications(pv => [
                    {
                      type: 'error',
                      id: Math.random(),
                      text: 'Algo salió mal, revisa tu conexión.'
                    },
                    ...pv
                  ]);
                  setValidCaptcha(false);
                }}
                onExpire={() => {
                  setNotifications(pv => [
                    {
                      type: 'warning',
                      id: Math.random(),
                      text: 'La verificación ha caducado, vuelve a verificarte.'
                    },
                    ...pv
                  ]);
                  setValidCaptcha(false);
                }}
              />
              <Notification
                notifications={notifications}
                removeNotif={removeNotif}
              />
            </div>

            <button
              className={`flex font-bold m-auto bg-main_green hover:bg-green_hover disabled:hover:bg-main_green focus:outline-green_focus text-pure_white no-underline border-none py-3 px-20 disabled:px-8 rounded-full disabled:cursor-not-allowed cursor-pointer disabled:opacity-70 transition-colors ease-linear duration-300`}
              type="submit"
              disabled={isLoading}
              aria-describedby="sendTooltip"
              title="Enviar formulario.">
              {isLoading ? (
                <>
                  <div
                    role="status"
                    className="h-5 w-5 mr-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle motion-reduce:animate-[spin_1.5s_linear_infinite]">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                  </div>
                  <TextAnimation text={'Enviando...'} />
                </>
              ) : (
                'Enviar'
              )}
            </button>
            <span className="sr-only" id="sendTooltip">
              Enviar formulario.
            </span>
          </fieldset>
        </form>
      </section>
    </Laout>
  );
};

export { Contact };
