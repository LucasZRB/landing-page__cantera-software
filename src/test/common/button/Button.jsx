import React from 'react';

const Button = ({ menssage, px, py }) => {
  const baseStyles = `no-underline border-none ${px} ${py} rounded-full cursor-pointer`;
  const colorStyles = 'bg-main_green text-pure_white';
  const hoverStyles = 'hover:bg-green_hover';
  const focusStyles = 'focus:outline-green_focus';
  const animationStyles = 'transition-colors ease-linear duration-300';
  const buttonStyles = `${baseStyles} ${colorStyles} ${hoverStyles} ${focusStyles} ${animationStyles}`;
  const buttonTitle = 'Botón ir al formulario';

  return (
    <a
      href="#contact"
      className={buttonStyles}
      aria-label={buttonTitle}
      title={buttonTitle}
      role="button">
      <b className="text-ct-sm font-bold">{menssage}</b>
      <span className="sr-only">, ir al formulario de contacto.</span>
    </a>
  );
};

export { Button };
