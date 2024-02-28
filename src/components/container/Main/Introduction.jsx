import React from 'react';
import { Button } from '../../common/button/Button';
import { Image } from '../../common/Image';
import { Laout } from '../../common/Laout';

const Introduction = () => {
  return (
    <Laout className="pt-[5.625rem] pb-[8.438rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/images/desktop_backgrounds/introductionBackground.png')" }}>
      <section
        id="introduction"
        className="max-w-7xl w-full text-start grid justify-items-center gap-8" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, auto)' }}>
        <div className='grid justify-items-center items-center' style={{ gridColumn: 1, gridRow: 'span 3', gridTemplateRows: 'repeat(3, 1ft)' }}>
          <h1 className="text-blue_title text-ct-main-title font-bold">
            Transformando sueños en código <span className="sr-only">:</span>
          </h1>
          <p className="text-ct-base mt-8 mb-11">
            Cambiar vidas por medio de la tecnología es posible. En La Cantera
            facilitamos el acceso a una educación de calidad orientada a
            perfiles tecnológicos, y promovemos el compromiso social y
            diversidad en la industria. ¿Querés ser parte de esta
            transformación?
          </p>
          <div className='w-full'>
            <Button message={'Quiero colaborar'} px={'px-20'} py={'py-3'} />
          </div>
        </div>
        <Image
          style={{ gridColumn: 2, gridRow: 'span 3' }}
          src={'./src/assets/images/decoratives/introductionImg.png'}
          width={'max-w-[38.75rem] w-full max-h-[36rem] h-full'}
        />
      </section>
    </Laout>
  );
};

export { Introduction };
