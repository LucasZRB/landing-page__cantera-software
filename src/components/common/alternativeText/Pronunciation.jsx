import React from 'react';

const Pronunciation = ({ word, pronunciation }) => {
  return (
    <>
      <span aria-hidden="true">{word}</span>
      <span className="hidden"> (</span>
      <span className="sr-only">{pronunciation}</span>
      <span className="hidden">)</span>
    </>
  );
};

export { Pronunciation };
