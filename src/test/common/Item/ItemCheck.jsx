import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const ItemCheck = ({ term }) => {
  return (
    <div className="flex mb-5 items-center justify-start">
      <span className="mr-3" aria-hidden="true">
        <FaCircleCheck className="w-9 h-9 text-blue_check" />
      </span>
      <p>
        <b>{term}</b>
      </p>
    </div>
  );
};

export { ItemCheck };
