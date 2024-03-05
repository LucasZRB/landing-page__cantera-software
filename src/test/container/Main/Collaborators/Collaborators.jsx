import React, { useState, useEffect, lazy, Suspense } from 'react';
import { companies } from '../../../../services/ServiceInfo';
import { Layout } from '../../../common/Layout';
import { Pronunciation } from '../../../../components/common/alternativeText/Pronunciation';

const Company = lazy(() => import('./Company'));
const SliderTest = lazy(() => import('./SliderTest'));
// TODO: Flexbox desktop

const Collaborators = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className="bg-section3 w-full">
      <section id="collaborators" className="text-ct-base min-w-ct-min w-full">
        <h2 className="text-blue_title text-ct-sub-title">
          Colaboran con nosotros
          <span className="sr-only">:</span>
        </h2>
        <p className="mt-5 mb-14">
          Contamos con la colaboración de empresas y{' '}
          <Pronunciation word={'ONG’s'} pronunciation={'ONGes'} /> que nos
          ayudan a potenciarnos y llegar más lejos.
        </p>
        <div className="flex flex-col items-center justify-center gap-7">
          <Suspense fallback={<div>Cargando...</div>}>
            {isMobile ? (
              <SliderTest />
            ) : (
              <>
                {companies.map((company, index) => {
                  company =
                    company.title === ''
                      ? { ...company, title: company.imgAlt }
                      : company;
                  return <Company key={index} {...company} />;
                })}
              </>
            )}
          </Suspense>
        </div>
      </section>
    </Layout>
  );
};

export { Collaborators };
