import React from 'react';

const Input = ({ type = 'text', id, placeholder, aria, title }) => {
  var className =
    'w-full p-3 mt-3 border-b-2 border-green_focus bg-transparent transition-colors focus:outline-none focus:border-b-main_green';

  return (
    <div className="relative w-full">
      {type != 'textarea' ? (
        <input
          className={className}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required
          aria-describedby={aria}
          title={title}
        />
      ) : (
        <textarea
          className={className}
          name={id}
          id={id}
          placeholder={placeholder}
          rows="4"
          required
          aria-describedby={aria}
          title={title}></textarea>
      )}
      <span className="sr-only" id={aria}>
        {title}
      </span>
    </div>
  );
};

export { Input };
