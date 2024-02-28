import * as React from 'react';
const Bubble = ({ width='12.625rem', height='12.625rem', bg='#000', props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}>
    <path
      fill={bg}
      d="M201.76 100.88c0 55.34-45.54 100.88-100.88 100.88C45.54 201.76 0 156.22 0 100.88 0 45.54 45.54 0 100.88 0l100.88 1.56v99.32Z"
    />
  </svg>
);
export { Bubble };
