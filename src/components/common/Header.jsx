import React from 'react';
import { Navbar } from './Navbar';

const Header = () => {
  return (
    <header>
      <figure className="logo">
        <img
          src="https://www.canterasoft.com/static/media/logo-cantera.45eb1a421819c849b696b4b10380c36d.svg"
          alt="Logo Cantera"
          aria-describedby="description-image"
        />
        <figcaption id="description-image" className="sr-only">
          Logo: Cantera Software.
        </figcaption>
      </figure>
      <Navbar />
    </header>
  );
};

export { Header };
