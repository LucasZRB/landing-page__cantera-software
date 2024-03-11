import React, { useState } from 'react';
import { Button2 } from '../button/Button2';

const ExpandableText = ({
  shortText,
  longText,
  articleClass = '',
  buttonProps: { px, py, description, title, ariaId }
}) => {
  const [expanded, setExpanded] = useState(false);
  const baseClass = `overflow-hidden transition-all ${
    expanded ? 'max-h-full duration-[2s]' : 'max-h-0 duration-500'
  } ${articleClass}`;

  const toggleRead = () => {
    setExpanded(!expanded);
  };

  const message = expanded ? 'Leer Menos' : 'Leer Más...';

  return (
    <>
      {shortText}
      <article className={`${baseClass}`}>{longText}</article>
      <Button2
        px={px}
        py={py}
        message={message}
        description={description ?? message}
        title={title ?? message}
        ariaId={ariaId}
        onClick={toggleRead}
      />
    </>
  );
};

export { ExpandableText };
