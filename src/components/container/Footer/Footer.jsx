import React from 'react';
import { ItemsNav } from '../../common/items/ItemsNav';
import { Pronunciation } from '../../common/alternativeText/Pronunciation';
import { Laout } from '../../common/Laout';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { LogoCantera } from '../../../assets/svgs/LogoCantera';

const Footer = () => {
  const focus =
    'flex items-center justify-center focus:outline-green_hover focus:outline-dotted focus:outline-4 focus:outline-offset-4 focus:rounded-xl';

  return (
    <Laout className="bg-blue_title py-[5.625rem]">
      <footer className="max-w-7xl w-full text-ct-sm text-pure_white flex justify-between">
        <section>
          <LogoCantera bg={'v2'} />
        </section>
        <section className="flex flex-col items-end">
          <b>Información:</b>
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
            <li>
              <ItemsNav
                href={'mailto:info@canterasoft.com'}
                className={focus}
                aria-label={'Enviar correo a La Cantera.'}
                title={'Enviar correo a La Cantera'}
                message={
                  <>
                    info@canterasoft.com{' '}
                    <IoMail className="ml-3" aria-hidden="true" />
                    <span className="sr-only">.</span>
                  </>
                }
              />
            </li>
          </ul>
          <span className='mt-3 font-bold'>
            &copy;
            <Pronunciation
              word={'2024'}
              pronunciation={'Dos mil veinticuatro.'}
            />{' '}
            Cantera Software.
          </span>
          <span className='font-bold'>Todos los derechos Reservados.</span>
        </section>
      </footer>
    </Laout>
  );
};

export { Footer };
