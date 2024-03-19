import React from 'react';
import { Button } from '../../common/button/Button';
import { links } from '../../../services/ServiceInfo';
import { ItemsNav } from '../../common/items/ItemsNav';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-4 ml-12 flex-wrap'>
        {links.map(({ type, ...extra }, index) => (
          <li key={index}>
            {type === 'btn' ? (
              <Button message={extra.message} px={'px-10'} py={'py-3'} />
            ) : (
              <ItemsNav {...extra} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
