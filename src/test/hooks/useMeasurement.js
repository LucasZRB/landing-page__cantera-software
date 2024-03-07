import { useEffect, useState } from 'react';

const useMeasurement = (ref) => {
  const [measurement, setMeasurement] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setMeasurement(prevWidth => ({
          ...prevWidth,
          width: ref.current.clientWidth
        }));
      }
      if (ref.current) {
        setMeasurement(prevHeight => ({
          ...prevHeight,
          height: ref.current.clientHeight
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return measurement;
};

export { useMeasurement };
