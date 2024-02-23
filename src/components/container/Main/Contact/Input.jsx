import React, { useState } from 'react';

const Input = ({ type = 'text', id, placeholder, aria, title, pattern, value, onChange, autoCapitalize = 'sentences' }) => {
  const [isFocused, setIsFocused] = useState(false);
  var className =
    'w-full p-3 mt-3 focus:--tw-hidde-shadow border-b-solid border-b-2 border-green_focus bg-transparent transition-colors ease-linear duration-300 focus:outline-none focus:border-b-main_green';

  return (
    <div className="relative w-full">
      {type != 'textarea' ? (
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={className}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required
          aria-describedby={aria}
          title={title}
          pattern={pattern}
          value={value}
          onChange={onChange}
          autoCapitalize={autoCapitalize}
        />
      ) : (
        <textarea
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={className}
          name={id}
          id={id}
          placeholder={placeholder}
          rows="4"
          required
          aria-describedby={aria}
          title={title}
          maxLength={225}
          pattern={pattern}
          value={value}
          onChange={onChange}
          autoCapitalize={autoCapitalize}
          ></textarea>
      )}
      <span
        className={`whitespace-nowrap hover:whitespace-normal overflow-hidden text-ellipsis max-w-[75%] absolute -top-6 left-0 p-2 bg-green_hover text-pure_white text-xs font-bold border-green_focus border rounded ${
          isFocused ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } transition-opacity ease-in-out duration-300`}
        id={aria}>
        {title}
      </span>
    </div>
  );
};

export { Input };
