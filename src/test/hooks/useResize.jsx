import React, { useEffect, useRef, useState } from 'react';

const useResize = (size) => {
  const svgRef = useRef(null);
  const [width, setWidth] = useState(248);
  const [height, setHeight] = useState(248);

  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current) {
        const parentWidth = svgRef.current.clientWidth;
        const parentHeight = svgRef.current.clientHeight;
  
        setWidth(parentWidth * size);
        setHeight(parentHeight * size);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, height, svgRef };
};

export { useResize };
