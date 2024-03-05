import React from 'react';
import { ItemsNav } from '../../../components/common/items/ItemsNav';
import { Pronunciation } from '../../../components/common/alternativeText/Pronunciation';
import { Layout } from '../../common/Layout';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { SmallLogoCantera } from '../../../assets/svgs/SmallLogoCantera';

// Responsive y parserearlo

const Footer = () => {
  const classBase = 'flex items-center justify-center';
  const focusClass =
    'focus:outline-green_hover focus:outline-dotted focus:outline-4 focus:outline-offset-4 focus:rounded-xl';
  const mainClass = `${classBase} ${focusClass}`

  return (
    <Layout className="bg-blue_title py-9">
      <footer className="min-w-ct-min w-full text-ct-sm text-pure_white flex flex-col gap-6 items-center">
        <section>
          <SmallLogoCantera bg={'v2'} />
        </section>
        <section className="flex flex-col gap-6">
          <div>
            <b>Información:</b>
            <ul className="flex flex-col pt-3 gap-3">
              <li>
                <ItemsNav
                  href={'https://www.instagram.com/canterasoftware/'}
                  className={mainClass}
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
                  className={mainClass}
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
                  className={mainClass}
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
          </div>
          <div className="flex flex-col">
            <span className="mt-3 font-bold">
              &copy;
              <Pronunciation
                word={'2024'}
                pronunciation={'Dos mil veinticuatro.'}
              />{' '}
              Cantera Software.
            </span>
            <span className="font-bold">Todos los derechos Reservados.</span>
          </div>
        </section>
      </footer>
    </Layout>
  );
};

export { Footer };
