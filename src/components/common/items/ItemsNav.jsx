import React from 'react';
import { introToView } from '../../../utils/introToView';

const button =
  'text-ct-sm font-bold text-blue_title hover:text-white hover:bg-blue_title focus:outline-green_focus no-underline border-none py-3 px-4 rounded-full cursor-pointer transition-colors ease-linear duration-300';

const ItemsNav = ({
  href,
  className = button,
  title,
  message,
  outLink = false
}) => {
  const onKeyDown = e => e.key === 'Enter' && introToView(href);

  var centralLink = {
    className,
    title,
    role: 'button'
  };

  if (outLink) {
    centralLink = {
      ...centralLink,
      href,
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  } else if (href.includes('mailto')) {
    centralLink = { ...centralLink, href, 'aria-describedby': title };
  } else {
    centralLink = { ...centralLink, tabIndex: 0, onClick: () => introToView(href), onKeyDown };
  }

  return <a {...centralLink}>{message}</a>;
};

export { ItemsNav };
