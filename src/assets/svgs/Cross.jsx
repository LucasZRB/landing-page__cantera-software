import * as React from 'react';
const Cross = ({ width='1rem', height='1rem', bg='#00425E', props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}>
    <path
      fill={bg}
      d="M.979 14.67c-.86-.86-.86-2.25 0-3.11l10.11-10.11c.86-.86 2.25-.86 3.11 0 .86.86.86 2.25 0 3.11L4.089 14.67c-.86.86-2.25.86-3.11 0Z"
    />
    <path
      fill={bg}
      d="M11.099 14.67.989 4.56c-.86-.86-.86-2.25 0-3.11.86-.86 2.25-.86 3.11 0l10.11 10.11c.86.86.86 2.25 0 3.11-.86.86-2.25.86-3.11 0Z"
    />
  </svg>
);
export { Cross };
