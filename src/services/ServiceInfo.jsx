import { Abbr } from '../components/common/alternativeText/Abbr';
import { IoMail } from 'react-icons/io5';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const colors = ['#FFD55F', '#48B95D', '#FF6B79', '#01CEDA'];
export const participants = [
  {
    href: 'https://es.linkedin.com/in/lucasantoniomunoz?trk=public_profile_browsemap-profile',
    title: 'Ir al Linkedin de Lucas.',
    imgSrc: './images/participants/Lucas.png',
    fullName: 'Lucas Muñoz',
    position: (
      <>
        <Abbr abbr={'CEO'} fullWord={'Director Ejecutivo'} /> y Co-Founder
      </>
    ),
    description:
      'Esta persona es Lucas, Director Ejecutivo, también llamado CEO, y Coh-Founder de la empresa.'
  },
  {
    href: 'https://ar.linkedin.com/in/fernogara?trk=public_profile_browsemap-profile',
    title: 'Ir al Linkedin de Fernando.',
    imgSrc: './images/participants/Nogara.png',
    fullName: 'Fernando Nogara',
    position: 'Co-Founder',
    description: 'Esta persona es Fernando, Coh-Founder de la empresa.'
  },
  {
    href: 'https://ar.linkedin.com/in/cdpanelo?trk=public_profile_browsemap-profile',
    title: 'Ir al Linkedin de Carla.',
    imgSrc: './images/participants/Panelo.png',
    fullName: 'Carla Panelo',
    position: (
      <>
        <Abbr abbr={'HR'} fullWord={'Recursos humanos'} /> Manager
      </>
    ),
    description:
      'Esta persona es Carla, Manayer de Recursos Humanos de la empresa.'
  },
  {
    href: 'https://ar.linkedin.com/in/m-paulina-ibarra?trk=org-employees',
    title: 'Ir al Linkedin de Paulina.',
    imgSrc: './images/participants/Paulina.png',
    fullName: 'Paulina Ibarra',
    position: 'Marketing Manager',
    description: 'Esta persona es Paulina, Marketing Manayer de la empresa.'
  }
];

export const companies = [
  {
    href: 'https://www.fonbec.org.ar/',
    title: '',
    imgSrc: './images/companies/logo_fonbec.png',
    imgAlt: 'Fonbec'
  },
  {
    href: 'https://fundacioneddy.org/',
    title: '',
    imgSrc: './images/companies/logo_eddy.png',
    imgAlt: 'Fundación Eddy'
  },
  {
    href: 'https://larueca.info/',
    title: '',
    imgSrc: './images/companies/logo_rueca.png',
    imgAlt: 'La Rueca Asociación'
  },
  {
    href: 'https://www.nogadev.com/',
    title: '',
    imgSrc: './images/companies/logo_nogadev.png',
    imgAlt: 'Nogadev'
  }
];

export const links = [
  {
    href: 'introduction',
    title: 'Botón volver al inicio.',
    message: 'Inicio'
  },
  {
    href: 'about-us',
    title: 'Botón ir al contenido sobre nosotros.',
    message: 'Sobre nosotros'
  },
  {
    href: 'program',
    title: 'Botón ir al contenido acerca de nuestro programa,',
    message: 'Nuestro programa'
  },
  {
    href: 'team',
    title: 'Botón ir al contenido del equipo.',
    message: 'Equipo'
  },
  {
    href: 'info-collaboration',
    title: 'Botón ir al contenido para saber cómo colaborar.',
    message: 'Cómo colaborar'
  },
  {
    href: 'contact',
    title: 'Botón ir al formulario.',
    message: 'Contacto',
    className: 'font-bold',
    type: 'btn'
  }
];

export const infoFooter = [
  {
    href: 'https://www.instagram.com/canterasoftware/',
    title: 'Ir al Instagram de Canterasoftware.',
    message: 'Canterasoftware',
    Icon: FaInstagram,
    outLink: true
  },
  {
    href: 'https://www.linkedin.com/company/la-cantera-software/',
    title: 'Ir al Linkedin de Canterasoftware.',
    message: 'La Cantera Software',
    Icon: FaLinkedinIn,
    outLink: true
  },
  {
    href: 'mailto:info@canterasoft.com',
    'aria-label': 'Enviar correo a La Cantera.',
    title: 'Enviar correo a La Cantera',
    message: 'info@canterasoft.com',
    Icon: IoMail
  }
];
