import React from 'react';
import { Button } from '../../common/button/Button';
import { Image } from '../../common/Image';
import { Laout } from '../../common/Laout';

const Introduction = () => {
  return (
    <Laout className="my-24">
      <section
        id="introduction"
        className="flex max-w-7xl w-full items-center justify-center text-start gap-8">
        <div className="flex-1">
          <h1 className="text-blue_title text-6xl font-bold">
            Transformando sueños en código <span className="sr-only">:</span>
          </h1>
          <p className="text-xl mt-8 mb-11">
            Cambiar vidas por medio de la tecnología es posible. En La Cantera
            facilitamos el acceso a una educación de calidad orientada a
            perfiles tecnológicos, y promovemos el compromiso social y
            diversidad en la industria. ¿Querés ser parte de esta
            transformación?
          </p>
          <Button message={'Quiero colaborar'} px={'px-20'} py={'py-3'} />
        </div>
        <Image
          src={'../../../public/images/ImagenHeader.png'}
          width={'flex-1 max-w-[38.75rem] w-full max-h-[36rem] h-full'}
        />
      </section>
    </Laout>
  );
};

export { Introduction };
