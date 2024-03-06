import React, { useEffect, useRef, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { getAverageCharacterWidth } from '../../../../utils/getAverageCharacterWidth';

const Input = ({
  type = 'text',
  id,
  placeholder,
  aria,
  title,
  pattern,
  value,
  onChange,
  readOnly,
  autoCapitalize = 'sentences'
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const inputRef = useRef(null);
  const tooltipRef = useRef(null);

  const baseClass = 'w-full p-3 mt-3 border-b-solid border-b-2 border-green_focus bg-transparent transition-colors ease-linear duration-300';
  const focusClass = "focus:hidden-shadow focus:outline-none focus:border-b-main_green focus:invalid:border-b-[#FF6B79]";
  const disableClass = "disabled:cursor-not-allowed disabled:opacity-50";
  let className = `${baseClass} ${focusClass} ${disableClass}`;

  const handleInfo = () => {
    setIsExpanded(!isExpanded);
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  };

  useEffect(() => {
    const tooltipWidth = tooltipRef.current.clientWidth;
    const averageCharacterWidth = getAverageCharacterWidth({
      fontSize: '0.75rem'
    });
    const maxCharacters = Math.floor(tooltipWidth / averageCharacterWidth);

    setShouldTruncate(title.split(' (')[0].length > maxCharacters);
  }, [title]);

  return (
    <div className="relative w-full">
      {type != 'textarea' ? (
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
          className={className}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required
          aria-describedby={aria}
          title={title}
          aria-label=" "
          pattern={pattern}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
          autoCapitalize={autoCapitalize}
        />
      ) : (
        <textarea
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
          className={className}
          name={id}
          id={id}
          placeholder={placeholder}
          rows="4"
          required
          aria-describedby={aria}
          title={title}
          aria-label=" "
          maxLength={225}
          pattern={pattern}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
          autoCapitalize={autoCapitalize}></textarea>
      )}
      <div
        className={`max-w-[75%] absolute bottom-[80%] left-0 p-2 bg-blue_title text-pure_white text-xs font-bold border-bluck_check border rounded ${
          isFocused ? 'opacity-1 ' : 'opacity-0 translate-y-[200%]'
        } pointer-events-none transition-all ease-in-out duration-700`}
        id={aria}
        aria-hidden={!isFocused}
        ref={tooltipRef}>
        <p className={shouldTruncate && !isExpanded ? 'truncate' : ''}>
          {title.split(' (')[0]}
        </p>
        {shouldTruncate && (
          <button
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onClick={handleInfo}
            disabled={readOnly}
            aria-hidden="true"
            className={`flex justify-center items-center ${
              isFocused ? 'pointer-events-auto' : 'pointer-events-none'
            } gap-1 absolute bg-white_hover text-green_focus text-xs font-bold border-green_focus border rounded p-0.5 -bottom-4 right-2`}>
            {isExpanded ? (
              'Leer menos'
            ) : (
              <>
                Leer más <FaInfoCircle />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export { Input };
