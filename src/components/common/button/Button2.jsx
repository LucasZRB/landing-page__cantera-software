import React from 'react';

const Button2 = ({
  px,
  py,
  type = 'button',
  isDisable = false,
  message,
  description,
  title,
  ariaId,
  onClick
}) => {
  const baseStyles = `flex m-auto no-underline border-none ${px} ${py} rounded-full cursor-pointer`;
  const colorStyles = 'bg-main_green text-pure_white';
  const hoverStyles = 'hover:bg-green_hover';
  const disableStyles =
    'disabled:hover:bg-main_green disabled:px-8 disabled:cursor-not-allowed disabled:opacity-70';
  const focusStyles = 'focus:outline-green_focus';
  const animationStyles = 'transition-colors ease-linear duration-300';
  const buttonStyles = `${baseStyles} ${colorStyles} ${hoverStyles} ${disableStyles} ${focusStyles} ${animationStyles}`;

  return (
    <button
      className={buttonStyles}
      type={type}
      disabled={isDisable}
      aria-describedby={`${ariaId}Tooltip`}
      title={title}
      onClick={onClick}>
      <b className="text-ct-sm font-bold">{message}</b>
      <span className="sr-only" id={`${ariaId}Tooltip`}>
        {description}
      </span>
    </button>
  );
};

export { Button2 };
