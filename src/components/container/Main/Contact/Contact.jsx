import React, { useState } from 'react';
import { Input } from './Input';
import { Laout } from '../../../common/Laout';
import ReCaptcha from '@matt-block/react-recaptcha-v2';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fullNamePattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hispanicPattern = /^[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?()\s]+$/;

    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) return alert('Por favor, completa todos los campos');

    if (!fullNamePattern.test(formData.fullName)) return alert('Por favor, ingresa un nombre válido (Solo letras y espacios).');
    if (!emailPattern.test(formData.email)) return alert('Por favor, ingresa una dirección de correo electrónico válida.');
    if (!hispanicPattern.test(formData.subject)) return alert('Por favor, ingresa un asunto válido (Letras y caracteres dentro del teclado español).');
    if (!hispanicPattern.test(formData.message)) return alert('Por favor, ingresa un mensaje válido (Letras y caracteres dentro del teclado español).');

    const data = new FormData();

    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      fetch('/send-mail.php', {
        method: 'POST',
        body: data
      })
        .then(response => {
          response.text();
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
          }).catch(error => {
            console.log(error);
          });
        });
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
    }
  }
  

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
        <form onSubmit={handleSubmit} className="w-full max-w-[37rem]">
          <fieldset className="w-full relative pt-14 flex flex-col items-start">
            <legend className="text-3xl font-bold absolute top-0">
              Contacta con nosotros
            </legend>

            <Input
              id={'fullName'}
              placeholder={'Nombre y Apellido'}
              aria={'fullNameTooltip'}
              title={'Ingresa tu nombre y apellido'}
              pattern={'^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$'}
              value={formData.fullName}
              onChange={handleChange}
              autoCapitalize='words'
            />

            <Input
              type="email"
              id={'email'}
              placeholder={'Email'}
              aria={'emailTooltip'}
              title={'Ingresa tu dirección de correo electrónico'}
              pattern={'^[^\s@]+@[^\s@]+\.[^\s@]+$'}
              value={formData.email}
              onChange={handleChange}
              autoCapitalize='none'
            />

            <Input
              id={'subject'}
              placeholder={'Asunto'}
              aria={'subjectTooltip'}
              title={'Ingresa el asunto de tu mensaje'}
              pattern={"^[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?()\s]+$"}
              value={formData.subject}
              onChange={handleChange}
            />

            <Input
              type="textarea"
              id={'message'}
              placeholder={'Mensaje...'}
              aria={'messageTooltip'}
              title={'Ingresa tu mensaje'}
              pattern={"[A-Za-z0-9áéíóúüñÁÉÍÓÚÜÑ.,;:'¡!¿?()\s]+$"}
              value={formData.message}
              onChange={handleChange}
            />

            <div className="pt-4 pb-14 m-auto">
              <ReCaptcha
                siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                theme="light"
                size="normal"
                onSuccess={captcha =>
                  console.log(`Successful`)
                }
                onError={() =>
                  console.log('Something went wrong, check your conenction')
                }
                onExpire={() =>
                  console.log('Verification has expired, re-verify.')
                }
              />
            </div>

            <input
              className="font-bold m-auto bg-main_green hover:bg-green_hover focus:outline-green_focus text-pure_white no-underline border-none py-3 px-20 rounded-full cursor-pointer transition-colors ease-linear duration-300"
              type="submit"
              value={'Enviar'}
              aria-describedby="sendTooltip"
              title="Enviar formulario"
            />
            <span className="sr-only" id="sendTooltip">
              Enviar formulario
            </span>
          </fieldset>
        </form>
      </section>
    </Laout>
  );
};

export { Contact };
