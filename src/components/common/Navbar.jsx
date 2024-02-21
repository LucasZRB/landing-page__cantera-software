import React from 'react';
import { Button } from './Button';
import { ItemNav } from './ItemNav';

const Navbar = () => {
  return (
    <nav className="w-full">
      <ul className="flex gap-12 ml-12 flex-wrap">
        <li>
          <ItemNav
            href="about-us"
            className="text-blue_title text-base font-bold"
            title="Botón ir al contenido sobre nosotros"
            message="Sobre nosotros"
          />
        </li>
        <li>
          <ItemNav
            href="program"
            className="text-blue_title text-base font-bold"
            title="Botón ir al contenido acerca de nuestro programa"
            message="Nuestro programa"
          />
        </li>
        <li>
          <ItemNav
            href="team"
            className="text-blue_title text-base font-bold"
            title="Botón ir al contenido del equipo"
            message="Equipo"
          />
        </li>
        <li>
          <ItemNav
            href="info-colaboration"
            className="text-blue_title text-base font-bold"
            title="Botón ir al contenido para saber cómo colaborar"
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
