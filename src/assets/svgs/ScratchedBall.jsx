import * as React from 'react';
const ScratchedBall = ({ width='119.625rem', height='404.75rem', bg='#fff', props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}>
    <path fill={bg} d="M0 0h1914v6476H0z" />
  </svg>
);
export { ScratchedBall };
