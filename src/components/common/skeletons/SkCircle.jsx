import React from 'react';
import ContentLoader from 'react-content-loader';

const SkCircle = props => (
  <ContentLoader
    speed={2}
    width={30}
    height={30}
    viewBox="0 0 30 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="15" cy="15" r="15" />
  </ContentLoader>
);

export { SkCircle };
