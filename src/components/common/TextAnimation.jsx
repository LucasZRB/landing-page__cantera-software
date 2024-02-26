import React from "react";

const TextAnimation = ({ text }) => {
  return (
    <div className="w-full tracking-[0.25rem] flex justify-center items-center">
      {text.split('').map((char, index) => {
        return (
          <span
            key={index}
            className={`animate-loading`}
            style={{ animationDelay: `${0.25 * index}s` }}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export { TextAnimation };
