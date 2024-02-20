import React from 'react';
import { Introduction } from './Introduction';
import { AboutUs } from './AboutUs';
import { Program } from './Program';
import { Team } from './Team';
import { InfoColaboretion } from './InfoColaboretion';
import { Colaborators } from './Colaborators';
import { Contact } from './Contact';

const Main = () => {
  return (
    <main>
      <Introduction />
      <AboutUs />
      <Program />
      <Team />
      <InfoColaboretion />
      <Colaborators />
      <Contact />
    </main>
  );
};

export { Main };
