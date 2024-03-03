import React from 'react';
import ContentLoader from 'react-content-loader';
import { useResize } from '../../hooks/useResize';

const SkImage = ({ size = 1, props }) => {
  const { width, height, svgRef } = useResize(size);

  return (
    <div className="w-full h-full" ref={svgRef}>
      <ContentLoader
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="0" y="0" rx="12" ry="12" width={width} height={height} />
      </ContentLoader>
    </div>
  );
};

export { SkImage };
