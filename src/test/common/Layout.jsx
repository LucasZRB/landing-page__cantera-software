import React from 'react';

const Layout = ({ children, className = "" }) => {
  let setClassName = 'flex justify-center px-10 ';
  if (className.includes('py-') || className.includes('pt-') || className.includes('pb-')) {
    setClassName += className
  } else {
    // py-ct-margins = 135px | py-11 = 44px
    setClassName += `py-11 ${className}`;
  }

  return (
    <div className={setClassName}>
      {children}
    </div>
  );
};

export { Layout };
