import React from 'react';
import { Navbar } from './Navbar';
import { Image } from '../../common/Image';
import { Laout } from '../../common/Laout';

const Header = () => {
  return (
    <Laout className="mt-5">
      <header className="flex max-w-7xl w-full justify-between items-center">
        <Image
          width={'max-w-[18.75rem] w-full max-h-14 h-full'}
          src={
            'https://www.canterasoft.com/static/media/logo-cantera.45eb1a421819c849b696b4b10380c36d.svg'
          }
          alt={'Logo Cantera.'}
          description={'Logo: Cantera Software.'}
        />
        <Navbar />
      </header>
    </Laout>
  );
};

export { Header };
