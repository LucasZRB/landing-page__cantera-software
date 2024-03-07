import React, { useRef, useState } from 'react';
import ReCaptcha from '@matt-block/react-recaptcha-v2';
import { Input } from "./Input";
import { Layout } from '../../../common/Layout';
import { Button2 } from '../../../common/button/Button2';
import { Notification } from '../../../../components/common/notifications/Notification';
import { TextAnimation } from '../../../../components/common/TextAnimation';
import { useGetWidthSize } from '../../../hooks/useGetWidthSize';
import { useMeasurement } from '../../../hooks/useMeasurement';

const Contact = () => {
  const bgRef = useRef(null);
  const { width, height } = useMeasurement(bgRef);
  const [validCaptcha, setValidCaptcha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [notifications, setNotifications] = useState([]);

  const isCompact = useGetWidthSize(460);

  const removeNotification = id => setNotifications(prev => prev.filter(n => n.id !== id));

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
  }

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

    setIsLoading(true);

    try {
      fetch(
        `https://${import.meta.env.VITE_URL_EMAIL}/${
          import.meta.env.VITE_KEY_EMAIL
        }`,
        {
          method: 'POST',
          body: data
        }
      )
        .then(response => {
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
        })
        .then(data => {
          setFormData({
            fullName: '',
            email: '',
            subject: '',
            message: ''
          });
        })
        .catch(error => {
          console.log('Error de envío:', error);
          setNotifications(pv => [
            {
              type: 'error', id: Math.random(),
              text: 'Algo salió mal al realizar el envío. Intentalo más tarde.'
            },
            ...pv
          ]);
        });
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setNotifications(pv => [
        { type: 'error', id: Math.random(), text: 'Algo salió mal al realizar tu solicitud.' },
        ...pv
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout
      bgRef={bgRef}
      className="text-ct-base flex flex-col items-center justify-center max-w-7xl w-full bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('./images/mobile_backgrounds/programBackground.png')",
        backgroundSize: `${width}px ${height}px`
      }}>
      <section
        id="contact"
        className="text-ct-base flex flex-col items-center justify-center min-w-ct-min w-full">
        <h2 className="text-blue_title text-ct-sub-title font-bold">
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
                size={isCompact ? 'compact' : 'normal'}
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
                removeNotification={removeNotification}
              />
            </div>

            <Button2
              px={'px-20'}
              py={'py-3'}
              type="submit"
              isDisable={false}
              ariaId={'send'}
              title={'Enviar formulario.'}
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
