import React from 'react';
import ContentLoader from 'react-content-loader';

const SkBubble = props => (
  <ContentLoader
    speed={2}
    width={202}
    height={202}
    viewBox="0 0 202 202"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <path
      d="M201.76 100.88c0 55.34-45.54 100.88-100.88 100.88C45.54 201.76 0 156.22 0 100.88 0 45.54 45.54 0 100.88 0l100.88 1.56v99.32Z"
    />
  </ContentLoader>
);

export { SkBubble };
