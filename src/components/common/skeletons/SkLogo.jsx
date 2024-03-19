import React from 'react';
import ContentLoader from 'react-content-loader';

const SkLogo = props => (
  <ContentLoader
    speed={2}
    width={160}
    height={30}
    viewBox="0 0 160 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="38" y="0" rx="4" ry="4" width="120" height="10" />
    <rect x="96" y="20" rx="3" ry="3" width="60" height="10" />
    <circle cx="15" cy="15" r="15" />
  </ContentLoader>
);

export { SkLogo };
