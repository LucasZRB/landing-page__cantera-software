import React from 'react';
import { Button } from '../../common/button/Button';
import { ItemsNav } from '../../common/items/ItemsNav';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-8 ml-12 flex-wrap">
        <li>
          <ItemsNav
            href="#about-us"
            title="Botón ir al contenido sobre nosotros."
            message="Sobre nosotros"
          />
        </li>
        <li>
          <ItemsNav
            href="#program"
            title="Botón ir al contenido acerca de nuestro programa,"
            message="Nuestro programa"
          />
        </li>
        <li>
          <ItemsNav
            href="#team"
            title="Botón ir al contenido del equipo."
            message="Equipo"
          />
        </li>
        <li>
          <ItemsNav
            href="#info-collaboration"
            title="Botón ir al contenido para saber cómo colaborar."
            message="Cómo colaborar"
          />
        </li>
        <li>
          <Button message={'Contacto'} py={'py-3'} px={'px-10'} />
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
