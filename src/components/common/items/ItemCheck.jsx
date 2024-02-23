import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const ItemCheck = ({ term, definition }) => {
  return (
    <div className="flex mb-5 items-center justify-center">
      <span className="mr-6" aria-hidden="true">
        <FaCircleCheck className="w-9 h-9 text-bluck_check" />
      </span>
      <p>
        <b>{term}</b> {definition}
      </p>
    </div>
  );
};

export { ItemCheck };
