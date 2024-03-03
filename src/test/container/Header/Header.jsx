import React from 'react';
import { Laout } from '../../common/Laout';
import { SmallLogoCantera } from '../../../assets/svgs/SmallLogoCantera';
import { HamburgerMenu } from './HamburgerMenu';

const Header = () => {
  return (
    <Laout className="pt-5 pb-9 bg-pure_white">
      <header className="flex min-w-ct-min w-full min-h-9 justify-between items-center">
        <figure className="flex items-center w-full h-full">
          <SmallLogoCantera
            alt={'Logo Cantera.'}
            aria-describedby="description-svg"
          />
          <figcaption id="description-svg" className="sr-only">
            Logo: Cantera Software.
          </figcaption>
        </figure>
        <HamburgerMenu />
      </header>
    </Laout>
  );
};

export { Header };
