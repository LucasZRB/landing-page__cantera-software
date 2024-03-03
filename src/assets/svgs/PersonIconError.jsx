import * as React from 'react';
const PersonIconError = ({ bg = '#434343', className = '', props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    className={`si-glyph si-glyph-person-error ${className}`}
    viewBox="0 0 16 16"
    {...props}>
    <title>{'179'}</title>
    <g fill={bg} fillRule="evenodd">
      <path
        d="M10.972 4.071c0 1.664-1.332 4.846-2.976 4.846-1.645 0-2.979-3.182-2.979-4.846 0-1.665 1.334-3.013 2.979-3.013 1.644.001 2.976 1.348 2.976 3.013ZM16.014 10.945l-.996-.996-1.494 1.493-1.493-1.493-.996.996 1.493 1.493-1.493 1.495.996.996 1.493-1.495 1.494 1.495.996-.996-1.494-1.495 1.494-1.493ZM8.704 10.33l-.708.15s-2.904-.283-3.76-1.416c-4.098 0-4.223 5.865-4.223 5.865h9.345l-.63-.65 1.951-1.963-1.975-1.986Z"
        className="si-glyph-fill"
      />
    </g>
  </svg>
);
export { PersonIconError };
