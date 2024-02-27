import React from 'react';

const Laout = ({ children, className = "" }) => {
  let setClassName = 'flex justify-center px-10 text-ct-main-title ';
  if (className.includes('py-') || className.includes('pt-') || className.includes('pb-')) {
    setClassName += className
  } else {
    setClassName += 'py-[8.438rem] ' + className;
  }
  const isFull = className.includes('full')

  return (
    <div className={setClassName} style={{ height: isFull ? 'calc(100vh - 16rem)' : '' }}>
      {children}
    </div>
  );
};

export { Laout };
