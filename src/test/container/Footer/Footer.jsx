import React from 'react';
import { Layout } from '../../common/Layout';
import { infoFooter } from '../../../services/ServiceInfo';
import { useGetWidthSize } from '../../hooks/useGetWidthSize';
import LogoCantera from '../../../assets/svgs/LogoCantera';
import { ItemsNav } from '../../../components/common/items/ItemsNav';
import SmallLogoCantera from '../../../assets/svgs/SmallLogoCantera';
import { Pronunciation } from '../../../components/common/alternativeText/Pronunciation';

// Responsive y parserearlo

const Footer = () => {
  const isMobile = useGetWidthSize(768);
  const Icon = isMobile ? SmallLogoCantera : LogoCantera;

  const classBase = 'flex items-center justify-center';
  const focusClass =
    'focus:outline-green_hover focus:outline-dotted focus:outline-4 focus:outline-offset-4 focus:rounded-xl';
  const mainClass = `${classBase} ${focusClass}`;

  return (
    <Layout className="bg-blue_title py-9 md:py-ct-footer">
      <footer className="size-section text-ct-sm text-pure_white flex flex-col gap-6 items-center md:flex-row md:justify-between md:items-start">
        <section>
          <Icon bg={'v2'} section={'footer'} />
        </section>
        <section className="space-y-6">
          <div className="md:text-end">
            <b>Información:</b>
            <ul className="flex flex-col md:items-end pt-3 gap-3">
              {infoFooter.map(({ message, Icon, ...extra }, index) => (
                <li key={index}>
                  <ItemsNav
                    className={mainClass}
                    message={
                      <>
                        {message} <Icon className="ml-3" aria-hidden="true" />
                        <span className="sr-only">.</span>
                      </>
                    }
                    {...extra}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:items-end">
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
