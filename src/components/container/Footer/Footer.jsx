import React from 'react';
import { Image } from '../../common/Image';
import { ItemsNav } from '../../common/items/ItemsNav';
import { Abbr } from '../../common/alternativeText/Abbr';
import { Pronunciation } from '../../common/alternativeText/Pronunciation';
import { Laout } from '../../common/Laout';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  var focus =
    'flex items-center justify-center focus:outline-green_hover focus:outline-dotted focus:outline-4 focus:outline-offset-4 focus:rounded-xl';

  return (
    <Laout className="bg-blue_title mt-24">
      <footer className="p-12 max-w-7xl w-full text-pure_white flex items-center justify-between">
        <section>
          <Image
            src={
              'https://www.canterasoft.com/static/media/logo-cantera-2.898ff237f5d3228d9a81c2e6dfe08dd3.svg'
            }
            width={'w-[18.75rem] h-14'}
          />
        </section>
        <section>
          <b>Información:</b>
          <ul className="py-6">
            <li>
              <span className="sr-only">Teléfono:</span>
              <span>+549 261 612 3456</span>
              <span className="sr-only">.</span>
            </li>
            <li>
              <span className="sr-only">Email:</span>
              <a
                className={focus}
                href="mailto:info@canterasoft.com"
                aria-label="Enviar correo a La Cantera"
                title="Enviar correo a La Cantera">
                info@canterasoft.com
              </a>
              <span className="sr-only">.</span>
            </li>
            <li>
              <span className="sr-only">Dirección:</span>
              Godoy Cruz,{' '}
              <Abbr
                abbr={'Mdz'}
                fullWord={'Mendoza'}
                isShowSrOnly
                abbrColor="decoration-green_hover"
              />
              , Argentina.
            </li>
          </ul>
          <b>
            &copy;
            <Pronunciation
              word={'2024'}
              pronunciation={'Dos mil veinticuatro.'}
            />{' '}
            Cantera Software. Todos los derechos Reservados.
          </b>
        </section>
        <section className="flex flex-col items-end">
          <b>Síguenos en:</b>
          <ul className="flex flex-col items-end pt-3 gap-3">
            <li>
              <ItemsNav
                href={'https://www.instagram.com/canterasoftware/'}
                className={focus}
                message={
                  <>
                    Canterasoftware{' '}
                    <FaInstagram className="ml-3" aria-hidden="true" />
                    <span className="sr-only">.</span>
                  </>
                }
                title={'Ir al Instagram de Canterasoftware.'}
                outLink={true}
              />
            </li>
            <li>
              <ItemsNav
                href={'https://www.linkedin.com/company/la-cantera-software/'}
                className={focus}
                message={
                  <>
                    La Cantera Software{' '}
                    <FaLinkedinIn className="ml-3" aria-hidden="true" />
                    <span className="sr-only">.</span>
                  </>
                }
                title={'Ir al Linkedin de Canterasoftware.'}
                outLink={true}
              />
            </li>
          </ul>
        </section>
      </footer>
    </Laout>
  );
};

export { Footer };
