import React from 'react';

const Laout = ({ children, className = "m-5 font-montserrat" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export { Laout };
