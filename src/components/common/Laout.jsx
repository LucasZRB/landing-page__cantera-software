import React from 'react';

const Laout = ({ children, className = "" }) => {
  className += ' px-10 flex justify-center';

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export { Laout };
