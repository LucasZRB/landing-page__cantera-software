import React from 'react';

const ItemNav = ({ href, className, title, message, outLink = false }) => {
  var target = '', rel = '';
  if (outLink) {
    target = '_blank';
    rel = 'noopener noreferrer';
  }

  return (
    <a
      href={`#${href}`}
      className={className}
      aria-label={title}
      title={title}
      role="button"
      target={target}
      rel={rel}>
      {message}
    </a>
  );
};

export { ItemNav };
