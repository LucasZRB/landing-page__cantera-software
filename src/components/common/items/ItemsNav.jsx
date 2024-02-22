import React from 'react';

const ItemsNav = ({ href, className, title, message, outLink = false }) => {
  var target = '', rel = '';
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
