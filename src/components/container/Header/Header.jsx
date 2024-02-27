import React from 'react';
import { Navbar } from './Navbar';
import { Laout } from '../../common/Laout';
import { LogoCantera } from '../../../assets/svgs/LogoCantera';

const Header = () => {
  return (
    <Laout className="py-0 mt-6">
      <header className="flex max-w-7xl w-full justify-between items-center">
        <figure className="max-w-[18.75rem] w-full max-h-14 h-full">
          <LogoCantera
            alt={'Logo Cantera.'}
            aria-describedby="description-svg"
          />
          <figcaption id="description-svg" className="sr-only">
            Logo: Cantera Software.
          </figcaption>
        </figure>
        <Navbar />
      </header>
    </Laout>
  );
};

export { Header };
