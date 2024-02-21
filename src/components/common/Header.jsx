import React from 'react';
import { Navbar } from './Navbar';
import { Image } from './Image';

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <Image
        width={'w-[18.75rem]'}
        src={
          'https://www.canterasoft.com/static/media/logo-cantera.45eb1a421819c849b696b4b10380c36d.svg'
        }
        alt={'Logo Cantera'}
        description={'Logo: Cantera Software.'}
      />
      <Navbar />
    </header>
  );
};

export { Header };
