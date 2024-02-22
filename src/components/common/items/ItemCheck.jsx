import React from 'react';

const ItemCheck = ({ term, definition }) => {
  return (
    <div className="flex mb-5 items-center justify-center">
      <span className="mr-5" aria-hidden="true">
        ✔️
      </span>
      <p>
        <b>{term}</b> {definition}
      </p>
    </div>
  );
};

export { ItemCheck };
