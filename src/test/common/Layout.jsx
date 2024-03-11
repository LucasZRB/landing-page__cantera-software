import React from 'react';

const Layout = ({ children, className = "", style = {}, bgRef }) => {
  let setClassName = 'flex justify-center px-10 ';
  if (className.includes('py-') || className.includes('pt-') || className.includes('pb-')) {
    setClassName += className
  } else {
    // py-ct-margins = 135px | py-11 = 44px
    setClassName += `py-11 md:py-ct-margins ${className}`;
  }

  return (
    <div ref={bgRef} className={setClassName} style={style}>
      {children}
    </div>
  );
};

export { Layout };
