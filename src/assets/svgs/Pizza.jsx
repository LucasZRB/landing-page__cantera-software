import * as React from 'react';
const Pizza = ({ width='5.813rem', height='5.813rem', bg='#FF6B79', props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}>
    <path
      fill={bg}
      d="M0 92.68V0h2.48c49.81 0 90.2 40.38 90.2 90.2v2.48H0Z"
    />
  </svg>
);
export { Pizza };
