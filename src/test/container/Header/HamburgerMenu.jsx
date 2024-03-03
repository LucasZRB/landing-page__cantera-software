import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const HamburgerMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleButton = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {!isExpanded ? (
        <button
          className="p-2 bg-main_green text-[1.25rem] text-pure_white rounded-full"
          onClick={toggleButton}>
          <RxHamburgerMenu strokeWidth={1}/>
        </button>
      ) : (
        <>
          <section className="absolute top-0 right-0 left-[30%] px-5 py-4 bg-main_green text-pure_white">
            <div className="flex justify-between items-center">
              <img
                src="../../../../public/images/mobile_backgrounds/hamburgerLogo.png"
                alt=""
              />
              <button className='text-[1.25rem] p-2' onClick={toggleButton}>
                <IoClose strokeWidth={50}/>
              </button>
            </div>
            <ul className='flex flex-col gap-1 mt-2 items-start text-ct-sm'>
              <li>
                <span>Inicio</span>
              </li>
              <li>
                <span>Sobre Nosotros</span>
              </li>
              <li>
                <span>Nuestro Programa</span>
              </li>
              <li>
                <span>Equipo</span>
              </li>
              <li>
                <span>Cómo colaborar</span>
              </li>
              <li>
                <span className='font-bold'>Contacto</span>
              </li>
            </ul>
          </section>
        </>
      )}
    </>
  );
};

export { HamburgerMenu };
