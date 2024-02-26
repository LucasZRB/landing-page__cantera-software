import * as React from 'react';
const Cheeto = ({ width = '7.125rem', height = '22.375rem', bg = '#01CEDA', props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}>
    <path
      fill={bg}
      d="M12.85 18.4C23.38 4.47 36.43.92 40.5 0H114v358H.66V54.01c.15-4.67 1.16-21.04 12.19-35.61Z"
    />
  </svg>
);
export { Cheeto };
