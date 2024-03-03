import React from 'react';

const SkStyles = ({ children, className = '' }) => {
  const outerClass = 'border p-4 rounded-xl shadow-xl';
  const headerClass = 'flex min-w-ct-min w-full justify-between items-center';

  return (
    <div className={`${outerClass} ${headerClass} ${className}`}>
      {children}
    </div>
  );
};

export { SkStyles };
