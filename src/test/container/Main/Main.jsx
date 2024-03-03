import React from 'react';
import { Introduction } from './Introduction';
import { AboutUs } from './AboutUs';
import { Program } from './Program/Program';
import { Team } from './Team/Team';
import { InfoCollaboretion } from './InfoCollaboretion';
import { Collaborators } from './Collaborators/Collaborators';
import { Contact } from './Contact/Contact';

const Main = () => {
  return (
    <main>
      <Introduction />
      <AboutUs />
      <Program />
      <Team />
      <InfoCollaboretion />
      <Collaborators />
      <Contact />
    </main>
  );
};

export { Main };
