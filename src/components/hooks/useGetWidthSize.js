import { useEffect, useState } from "react";

const useGetWidthSize = maxWidth => {
  const [isUnderThreshold, setIsUnderThreshold] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsUnderThreshold(window.innerWidth <= maxWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isUnderThreshold;
};

export { useGetWidthSize };
