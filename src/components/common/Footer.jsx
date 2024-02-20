import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section>
        <figure className="">
          <img
            src="https://www.canterasoft.com/static/media/logo-cantera-2.898ff237f5d3228d9a81c2e6dfe08dd3.svg"
            alt=""
          />
        </figure>
      </section>
      <section>
        <b>Información:</b>
        <ul>
          <li>
            <span>+549 261 612 3456</span>
          </li>
          <li>
            <a
              href="mailto:info@canterasoft.com"
              aria-label="Enviar correo a La Cantera"
              title="Enviar correo a La Cantera">
              info@canterasoft.com
            </a>
          </li>
          <li>
            Godoy Cruz,{' '}
            <abbr aria-hidden="true" title="Mendoza">
              Mdz
            </abbr>
            <span className="hidden"> (</span>
            <span className="sr-only">Mendoza</span>
            <span className="hidden">)</span>, Argentina
          </li>
        </ul>
        <b>
          &copy;
          <span aria-hidden="true">2024</span>
          <span className="hidden"> (</span>
          <span className="sr-only">Dos mil veinticuatro</span>
          <span className="hidden">)</span>
          {' '}Cantera Software. Todos los derechos Reservados
        </b>
      </section>
      <section>
        <b>Síguenos en:</b>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Canterasoftware <span aria-hidden="true">&#9654;</span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              La Cantera Software <span aria-hidden="true">&#9654;</span>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export { Footer };
