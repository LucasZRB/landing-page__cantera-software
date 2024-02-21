import React from 'react';

const Button = ({ message, py, px }) => {
  return (
    <a
      href="#contact"
      className={`bg-main_green hover:bg-green_hover focus:outline-green_focus text-pure_white no-underline border-none ${py} ${px} rounded-full cursor-pointer transition-colors`}
      aria-label="Botón ir al formulario"
      title="Botón ir al formulario"
      role="button">
      <b>{message}</b>
      <span className="sr-only"> Ir al formulario de contacto</span>
    </a>
  );
};

export { Button };
