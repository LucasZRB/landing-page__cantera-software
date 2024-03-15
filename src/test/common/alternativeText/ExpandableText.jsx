import React, { useState } from 'react';

const ExpandableText = ({
  shortText,
  longText,
  articleClass = '',
  buttonProps: { description, title, ariaId }
}) => {
  const [expanded, setExpanded] = useState(false);
  const baseClass = `overflow-hidden transition-all ${
    expanded ? 'max-h-full duration-[2s]' : 'max-h-0 duration-500'
  } ${articleClass}`;
  const baseButtonStyles = `cursor-pointer`;
  const colorButtonStyles = 'text-blue_title font-bold';
  const hoverButtonStyles = 'hover:text-black';
  const focusButtonStyles = 'focus:outline-green_focus';
  const animationButtonStyles = 'transition-colors ease-linear duration-300';
  const buttonStyles = `${baseButtonStyles} ${colorButtonStyles} ${hoverButtonStyles} ${focusButtonStyles} ${animationButtonStyles}`;

  const toggleRead = () => {
    setExpanded(!expanded);
  };

  const message = expanded ? 'Leer Menos' : 'Leer Más...';

  return (
    <>
      {shortText}
      <article className={`${baseClass}`}>{longText}</article>
      <button
        className={buttonStyles}
        aria-describedby={`${ariaId}Tooltip`}
        title={title ?? message}
        onClick={toggleRead}>
        <b className="text-ct-sm font-bold">{message}</b>
        <span className="sr-only" id={`${ariaId}Tooltip`}>
          {description ?? message}
        </span>
      </button>
    </>
  );
};

export { ExpandableText };
