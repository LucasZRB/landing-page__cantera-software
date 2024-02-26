import * as React from 'react';
const Ball = ({ width='11.875rem', height='11.875rem', bg='#48B95D', props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}>
    <path
      fill={bg}
      d="M127.226 157.55c34.397-17.934 47.743-60.356 29.81-94.754-17.934-34.397-60.357-47.743-94.754-29.81-34.397 17.934-47.744 60.357-29.81 94.754 17.934 34.398 60.356 47.744 94.754 29.81Z"
    />
  </svg>
);
export { Ball };
