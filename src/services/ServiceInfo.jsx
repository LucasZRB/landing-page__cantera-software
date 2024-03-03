import React from 'react';
import { Abbr } from '../components/common/alternativeText/Abbr';

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