import React from 'react';

const Laout = ({ children, className = "" }) => {
  let setClassName = 'flex justify-center px-10 ';
  if (className.includes('py-') || className.includes('pt-') || className.includes('pb-')) {
    setClassName += className
  } else {
    setClassName += 'py-[8.438rem] ' + className;
  }

  return (
    <div className={setClassName}>
      {children}
    </div>
  );
};

export { Laout };
