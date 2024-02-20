import React from 'react';

const Laout = ({ children, className = "m-5" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export { Laout };
