import React from 'react';

const Abbr = ({
  abbr,
  fullWord,
  isShowSrOnly = false,
  descriptionSrOnly = '',
  hasHiddenParentheses = true,
  ariaHidden = true
}) => {
  const hiddenMessage = isShowSrOnly ? (
    <span className="sr-only">
      {hasHiddenParentheses ? (
        <>
          <span className="hidden"> (</span>
          {descriptionSrOnly != '' ? descriptionSrOnly : fullWord}
          <span className="hidden">)</span>
        </>
      ) : (
        <> ({descriptionSrOnly != '' ? descriptionSrOnly : fullWord})</>
      )}
    </span>
  ) : null;

  return (
    <>
      <abbr aria-hidden={ariaHidden} title={fullWord}>
        {abbr}
      </abbr>
      {hiddenMessage}
    </>
  );
};

export { Abbr };
