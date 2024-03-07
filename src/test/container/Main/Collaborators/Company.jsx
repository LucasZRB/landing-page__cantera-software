import React, { useState } from 'react';
import { LazyImage } from '../../../common/LazyImage';

const Company = ({ href, title, imgSrc, imgAlt }) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusClass =
    "after:content-[''] after:block after:border-b-2 after:border-blue_title after:mt-1 after:w-1/2 after:mx-auto";

  const optionsImage = {
    src: imgSrc,
    alt: imgAlt,
    title: title,
    imageClass: 'size-full object-contain'
  };

  return (
    <div className={isFocused ? focusClass : ''}>
      <a
        className="w-52 h-32 flex justify-center items-center bg-pure_white rounded-xl outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        href={href}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="description-image">
        <LazyImage {...optionsImage} />
      </a>
    </div>
  );
};

export default Company;
