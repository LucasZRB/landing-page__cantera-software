import React, { useEffect, useRef, useState } from 'react';
import { Input } from './Input';
import { Captcha } from './Captcha';
import { Layout } from '../../../common/Layout';
import { Button2 } from '../../../common/button/Button2';
import { useMeasurement } from '../../../hooks/useMeasurement';
import { TextAnimation } from '../../../common/TextAnimation';
import { Notification } from '../../../common/notifications/Notification';
import { ErrorModal } from './ErrorModal';

const ENVIRONMENTS = import.meta.env;
const URL_EMAIL = ENVIRONMENTS.VITE_URL_EMAIL;
const KEY_EMAIL = ENVIRONMENTS.VITE_KEY_EMAIL;
const KEY_CAPTCHA = ENVIRONMENTS.VITE_KEY_RECAPTCHA;

const Contact = () => {
  const bgRef = useRef(null);
  const { width, height } = useMeasurement(bgRef);
  const [validCaptcha, setValidCaptcha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotAvailable, setIsNotAvailable] = useState(false);

  useEffect(() => {
    if (!URL_EMAIL || !KEY_EMAIL) return setIsNotAvailable(true);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [notifications, setNotifications] = useState([]);

  const removeNotification = id =>
    setNotifications(prev => prev.filter(n => n.id !== id));

  const addNotification = (type, text) => {
    setNotifications(prevNotification => [
      {
        type,
        id: Math.random(),
        text
      },
      ...prevNotification
    ]);
  };

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
        errorMessage:
          'Por favor, ingresa tu nombre y apellido (Solo letras y espacios)'
      },
      email: {
        pattern: emailPattern,
        errorMessage:
          'Por favor, ingresa una dirección de correo electrónico válida (Solo letras, números, puntos y guiones, seguido de un @ (arroba), subdominio (opcional), dominio, un punto y la parte final (.com, .org, .es. .ar, .co, etc.))'
      },
      subject: {
        pattern: hispanicPattern,
        errorMessage:
          'Por favor, ingresa un asunto válido (Letras y caracteres dentro del teclado español)'
      },
      message: {
        pattern: hispanicPattern,
        errorMessage:
          'Por favor, ingresa un mensaje válido (Letras y caracteres dentro del teclado español)'
      }
    };

    const validateField = fieldName => {
      const { pattern, errorMessage } = validationRules[fieldName];
      if (!pattern.test(formData[fieldName])) {
        addNotification('error', errorMessage);
        return false;
      }
      return true;
    };

    const validateAllFields = () => {
      const fieldsToValidate = ['fullName', 'email', 'subject', 'message'];
      for (const field of fieldsToValidate) {
        var message = 'Por favor, completa todos los campos';
        if (!formData[field]) {
          if (!KEY_CAPTCHA) {
            addNotification('error', message);
          } else {
            message += ' y el reCaptcha';
            addNotification('error', message);
          }
          return false;
        }
        if (KEY_CAPTCHA && !validCaptcha) {
          message += ' y el reCaptcha';
          addNotification('error', message);
          return false;
        }
        if (!validateField(field)) {
          return false;
        }
        return true;
      }
    };

    if (!validateAllFields()) return;

    const data = new FormData();

    data.append('nombre_completo', formData.fullName);
    data.append('email', formData.email);
    data.append('asunto', formData.subject);
    data.append('mensaje', formData.message);

    setIsLoading(true);

    (async () => {
      try {
        const response = await fetch(`https://${URL_EMAIL}/${KEY_EMAIL}`, {
          method: 'POST',
          body: data
        });

        if (!response.ok) {
          setNotifications(pv => [
            {
              type: 'error',
              id: Math.random(),
              text: 'Error de red o del servidor.'
            },
            ...pv
          ]);
        }

        console.log('Success:');
        setNotifications(pv => [
          { type: 'success', id: Math.random(), text: 'Enviado con éxito!' },
          ...pv
        ]);
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error('Error de envío:', error);
        setNotifications(pv => [
          {
            type: 'error',
            id: Math.random(),
            text: 'Algo salió mal al realizar el envío. Intentalo más tarde.'
          },
          ...pv
        ]);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <Layout
      bgRef={bgRef}
      className="text-ct-base flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('./images/mobile_backgrounds/programBackground.png')",
        backgroundSize: `${width}px ${height}px`
      }}>
      <section
        id="contact"
        tabIndex={-1}
        className="size-section text-ct-base flex flex-col items-center justify-center">
        <h2 className="text-blue_title text-ct-sub-title">
          Contacto<span className="sr-only">:</span>
        </h2>
        <p className="mt-5 mb-14">
          Si te interesa saber más de nosotros, y/o quieres colaborar completa
          el siguiente formulario.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full min-w-ct-min max-w-[37rem]">
          <fieldset className="w-full relative flex flex-col items-start border-2 p-8 pt-0 rounded-xl">
            <ErrorModal showModal={!URL_EMAIL || !KEY_EMAIL} />

            <Input
              id={'fullName'}
              placeholder={'Nombre y Apellido'}
              aria={'fullNameTooltip'}
              title={'Ingresa tu nombre y apellido (Solo letras y espacios)'}
              pattern={"^[A-Za-záéíóúüñÁÉÍÓÚÜÑ']+\\s[A-Za-záéíóúüñÁÉÍÓÚÜÑ']+$"}
              value={formData.fullName}
              onChange={handleChange}
              readOnly={isLoading || isNotAvailable}
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
              readOnly={isLoading || isNotAvailable}
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
              readOnly={isLoading || isNotAvailable}
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
              readOnly={isLoading || isNotAvailable}
            />

            <div className="pt-4 pb-14 m-auto">
              <Captcha
                {...{
                  KEY_CAPTCHA,
                  setValidCaptcha,
                  isNotAvailable,
                  setNotifications
                }}
              />
              <Notification
                notifications={notifications}
                removeNotification={removeNotification}
              />
            </div>

            <Button2
              px={'px-20'}
              py={'py-3'}
              type="submit"
              isDisable={isLoading || isNotAvailable}
              ariaId={'send'}
              title={'Enviar formulario.'}
              textStyles="flex"
              message={
                isLoading ? (
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
                )
              }
            />
          </fieldset>
        </form>
      </section>
    </Layout>
  );
};

export { Contact };
