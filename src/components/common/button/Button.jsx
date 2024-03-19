import React from 'react';
import { introToView } from '../../../utils/introToView';

const Button = ({ message, px, py, disabled = null }) => {
  const baseStyles = `no-underline border-none ${px} ${py} rounded-full cursor-pointer`;
  const colorStyles = 'bg-main_green text-pure_white';
  const hoverStyles = 'hover:bg-green_hover';
  const focusStyles = 'focus:outline-green_focus';
  const animationStyles = 'transition-colors ease-linear duration-300';
  const buttonStyles = `${baseStyles} ${colorStyles} ${hoverStyles} ${focusStyles} ${animationStyles} ${disabled ? 'pointer-events-none' : ''}`;
  const buttonTitle = 'Botón ir al formulario';

  const onKeyDown = e => e.key === 'Enter' && introToView('contact');

  return (
    <a
      className={buttonStyles}
      aria-label={buttonTitle}
      title={buttonTitle}
      role="button"
      tabIndex={disabled ? '' : 0}
      onClick={() => introToView('contact')}
      onKeyDown={onKeyDown}>
      <b className="text-ct-sm font-bold">{message}</b>
      <span className="sr-only">, ir al formulario de contacto.</span>
    </a>
  );
};

export { Button };
