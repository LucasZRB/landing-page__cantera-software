import React from 'react';

const Laout = ({ children, className = "", style = {} }) => {
  let setClassName = 'flex justify-center px-10 ';
  if (className.includes('py-') || className.includes('pt-') || className.includes('pb-')) {
    setClassName += className
  } else {
    setClassName += 'py-ct-margins ' + className;
  }

  return (
    <div className={setClassName} style={style}>
      {children}
    </div>
  );
};

export { Laout };
