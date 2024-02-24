import React, { useState } from 'react';
import ReCaptcha from '@matt-block/react-recaptcha-v2';
import { Input } from './Input';
import { Laout } from '../../../common/Laout';
import { SuccessMessage } from '../../../common/notifications/SuccessMessage';
import { WarningMessage } from '../../../common/notifications/WarningMessage';
import { ErrorMessage } from '../../../common/notifications/ErrorMessage';

const Contact = () => {
  const [validCaptcha, setValidCaptcha] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [successNotifications, setSuccessNotifications] = useState([]);
  const [warningnotifications, setWarningNotifications] = useState([]);
  const [errorNotifications, setErrorNotifications] = useState([]);

  const removeSuccessNotif = id => setSuccessNotifications(pv => pv.filter(n => n.id !== id));
  const removeWarningNotif = id => setWarningNotifications(pv => pv.filter(n => n.id !== id));
  const removeErrorNotif = id => setErrorNotifications(pv => pv.filter(n => n.id !== id));

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

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !validCaptcha
    )
      return setErrorNotifications(pv => [{ id: Math.random(), text: "Por favor, completa todos los campos y el reCaptcha" }, ...pv]);

    if (!fullNamePattern.test(formData.fullName))
      return setErrorNotifications(pv => [{ id: Math.random(), text: "Por favor, ingresa tu nombre y apellido (Solo letras y espacios)" }, ...pv]);
    if (!emailPattern.test(formData.email))
      return setErrorNotifications(pv => [{ id: Math.random(), text: "Por favor, ingresa una dirección de correo electrónico válida (Solo letras, números, puntos y guiones, seguido de un @ (arroba), subdominio (opcional), dominio, un punto y la parte final (.com, .org, .es. .ar, .co, etc.))" }, ...pv]);
    if (!hispanicPattern.test(formData.subject))
      return setErrorNotifications(pv => [{ id: Math.random(), text: "Por favor, ingresa un asunto válido (Letras y caracteres dentro del teclado español)" }, ...pv]);
    if (!hispanicPattern.test(formData.message))
      return setErrorNotifications(pv => [{ id: Math.random(), text: "Por favor, ingresa un mensaje válido (Letras y caracteres dentro del teclado español)" }, ...pv]);

    const data = new FormData();

    data.append('nombre_completo', formData.fullName);
    data.append('email', formData.email);
    data.append('asunto', formData.subject);
    data.append('mensaje', formData.message);

    try {
      fetch(`https://${import.meta.env.VITE_URL_EMAIL}/${import.meta.env.VITE_KEY_EMAIL}`, {
        method: 'POST',
        body: data
      })
        .then(response => {
          console.log('Succes:');
          setSuccessNotifications(pv => [{ id: Math.random(), text: "Enviado con éxito!" }, ...pv]);
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
          setErrorNotifications(pv => [{ id: Math.random(), text: "Algo salió mal al realizar el envío. Intentalo más tarde." }, ...pv]);
        });
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setErrorNotifications(pv => [{ id: Math.random(), text: "Algo salió mal al realizar tu solicitud." }, ...pv]);
    }
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
              pattern={
                '^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$'
              }
              value={formData.email}
              onChange={handleChange}
              autoCapitalize="none"
            />

            <Input
              id={'subject'}
              placeholder={'Asunto'}
              aria={'subjectTooltip'}
              title={
                'Ingresa el asunto de tu mensaje (Solo letras y caracteres dentro del teclado español)'
              }
              pattern={"^[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?()\\s]+$"}
              value={formData.subject}
              onChange={handleChange}
            />

            <Input
              type="textarea"
              id={'message'}
              placeholder={'Mensaje...'}
              aria={'messageTooltip'}
              title={
                'Ingresa tu mensaje (Solo letras y caracteres dentro del teclado español)'
              }
              pattern={"[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?()\\s]+$"}
              value={formData.message}
              onChange={handleChange}
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
                  setErrorNotifications(pv => [
                    {
                      id: Math.random(),
                      text: 'Algo salió mal, revisa tu conexión.'
                    },
                    ...pv
                  ]);
                  setValidCaptcha(false);
                }}
                onExpire={() => {
                  setWarningNotifications(pv => [
                    {
                      id: Math.random(),
                      text: 'La verificación ha caducado, vuelve a verificarte.'
                    },
                    ...pv
                  ]);
                  setValidCaptcha(false);
                }}
              />
              <SuccessMessage
                notifications={successNotifications}
                removeNotif={removeSuccessNotif}
              />
              <WarningMessage
                notifications={warningnotifications}
                removeNotif={removeWarningNotif}
              />
              <ErrorMessage
                notifications={errorNotifications}
                removeNotif={removeErrorNotif}
              />
            </div>

            <input
              className="font-bold m-auto bg-main_green hover:bg-green_hover focus:outline-green_focus text-pure_white no-underline border-none py-3 px-20 rounded-full cursor-pointer transition-colors ease-linear duration-300"
              type="submit"
              value={'Enviar'}
              aria-describedby="sendTooltip"
              title="Enviar formulario."
            />
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
