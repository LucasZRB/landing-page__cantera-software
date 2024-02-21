import React from 'react';
import { Image } from './Image';
import { ItemNav } from './ItemNav';

const Footer = () => {
  return (
    <footer className="mt-24 p-12 bg-blue_title text-pure_white flex items-center justify-between">
      <section>
        <Image
          src={
            'https://www.canterasoft.com/static/media/logo-cantera-2.898ff237f5d3228d9a81c2e6dfe08dd3.svg'
          }
          width={'w-[18.75rem]'}
        />
      </section>
      <section>
        <b>Información:</b>
        <ul className='py-6'>
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
          <span className="hidden">)</span> Cantera Software. Todos los derechos
          Reservados
        </b>
      </section>
      <section className='flex flex-col items-end'>
        <b>Síguenos en:</b>
        <ul className='flex flex-col items-end pt-3 gap-3'>
          <li>
            <ItemNav
              href={'https://www.instagram.com/canterasoftware/'}
              className=""
              message={
                <>
                  Canterasoftware <span aria-hidden="true">&#9654;</span>
                </>
              }
              title={'Ir al Instagram de Canterasoftware'}
              outLink={true}
            />
          </li>
          <li>
            <ItemNav
              href={'https://www.linkedin.com/company/la-cantera-software/'}
              className=""
              message={
                <>
                  La Cantera Software <span aria-hidden="true">&#9654;</span>
                </>
              }
              title={'Ir al Linkedin de Canterasoftware'}
              outLink={true}
            />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export { Footer };
