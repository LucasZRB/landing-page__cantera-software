import React from 'react';

const button =
  'text-base font-bold text-blue_title hover:text-white hover:bg-blue_title focus:outline-green_focus no-underline border-none py-3 px-4 rounded-full cursor-pointer transition-colors ease-linear duration-300';

const ItemsNav = ({ href, className = button, title, message, outLink = false }) => {
  let target = '', rel = '';
  if (outLink) {
    target = '_blank';
    rel = 'noopener noreferrer';
  }

  return (
    <a
      href={href}
      className={className}
      aria-describedby={title}
      title={title}
      role="button"
      target={target}
      rel={rel}>
      {message}
    </a>
  );
};

export { ItemsNav };
