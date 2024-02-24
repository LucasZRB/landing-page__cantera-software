import React from 'react';
import { MdImageSearch } from 'react-icons/md';

const Skeleton = ({ width }) => {
  return (
    <div className='border p-4 rounded-xl shadow-xl w-4/5 max-w-lg'>
      <div className="relative h-60 mb-4 flex justify-center items-center bg-gray-300 animate-pulse">
        <MdImageSearch className='w-10 h-10 text-gray-200' />
      </div>
      <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
      <div className="btn"></div>
    </div>
  );
};

export { Skeleton };
