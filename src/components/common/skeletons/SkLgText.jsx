import React from "react"
import ContentLoader from "react-content-loader"

const SkLgText = props => (
  <ContentLoader
    speed={2}
    width={248}
    height={350}
    viewBox="0 0 248 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="8" ry="8" width="248" height="40" />
    <rect x="0" y="52" rx="8" ry="8" width="248" height="40" />
    <rect x="0" y="133" rx="0" ry="0" width="248" height="24" />
    <rect x="0" y="169" rx="0" ry="0" width="248" height="24" />
    <rect x="0" y="205" rx="0" ry="0" width="248" height="24" />
    <rect x="0" y="241" rx="0" ry="0" width="248" height="24" />
    <rect x="9" y="305" rx="16" ry="16" width="230" height="45" />
  </ContentLoader>
);

export {SkLgText};
