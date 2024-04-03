import React from 'react';

const ErrorModal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <div className="absolute z-10 inset-0 flex items-center justify-center bg-gray-700/30 backdrop-blur-[2px] rounded-[0.64rem]">
          <div className="text-ct-sm bg-pure_white border-2 m-8 p-8 rounded-xl">
            <h3 className="text-ct-base font-bold mb-4">¡Ups!</h3>
            <div className="space-y-2">
              <p>Este formulario no funciona actualmente.</p>
              <p>Estamos trabajando en ello.</p>
              <p>
                Por favor, envíanos tu mensaje a{' '}
                <a
                  className="text-blue-600 underline"
                  href="mailto:hola@canterasoft.com">
                  hola@canterasoft.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ErrorModal };
