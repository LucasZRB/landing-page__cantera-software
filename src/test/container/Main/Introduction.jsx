import React from 'react';
import { Button } from '../../common/button/Button';
import { Layout } from '../../common/Layout';
/* spell-checker: disable */

const Introduction = () => {
    return (
      <Layout className="bg-pure_white w-full flex">
        <section id="introduction" className="min-w-[17.5rem]">
          <div className="grid justify-items-center items-center">
            <h1 className="text-blue_title text-ct-main-title">
              Transformando sueños en código <span className="sr-only">:</span>
            </h1>
            <p className="text-ct-base mt-4 mb-6">
              Cambiar vidas por medio de la tecnología es posible. En La Cantera
              facilitamos el acceso a una educación de calidad orientada a
              perfiles tecnológicos, y promovemos el compromiso social y
              diversidad en la industria. ¿Querés ser parte de esta
              transformación?
            </p>
            <div className='w-full'>
              <Button menssage="Quiero colaborar" px="px-14" py="py-3" />
            </div>
          </div>
          {/* <div>Responsive Img</div> */}
        </section>
      </Layout>
    );
  };
  
  export{Introduction };