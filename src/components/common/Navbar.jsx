import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a
            hfer="#about-us"
            aria-label="Botón ir al contenido sobre nosotros"
            role="button">
            <b>Sobre nosotros</b>
            <span className="sr-only">Ir al contenido sobre nosotros</span>
          </a>
        </li>
        <li>
          <a
            hfer="#program"
            aria-label="Botón ir al contenido acerca de nuestro programa"
            role="button">
            <b>Nuestro programa</b>
            <span className="sr-only">
              Ir al contenido acerca de nuestro programa
            </span>
          </a>
        </li>
        <li>
          <a
            hfer="#team"
            aria-label="Botón ir al contenido del equipo"
            role="button">
            <b>Equipo</b>
            <span className="sr-only">Ir al contenido del equipo</span>
          </a>
        </li>
        <li>
          <a
            hfer="#info-colaboration"
            aria-label="Botón ir al contenido para saber cómo colaborar"
            role="button">
            <b>Cómo colaborar</b>
            <span className="sr-only">
              Ir al contenido para saber cómo colaborar
            </span>
          </a>
        </li>
        <li>
          <a hfer="#contact" aria-label="Botón ir al formulario" role="button">
            <b>Contacto</b>
            <span className="sr-only">Ir a formulario de contacto.</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
