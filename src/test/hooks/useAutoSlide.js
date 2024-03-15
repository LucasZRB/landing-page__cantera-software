import { useEffect, useState } from 'react';

const ONE_SECOND = 1000;
const setDelay = delay => ONE_SECOND * delay;

const useAutoSlide = (changed, action) => {
  const [currentDelay, setCurrentDelay] = useState(setDelay(5));
  const [isPaused, setIsPaused] = useState(false);

  const changedDelay = delay => {
    setCurrentDelay(setDelay(delay));
  }

  useEffect(() => {
    let intervalRef;

    if (!isPaused) {
      intervalRef = setInterval(action, currentDelay);
    }

    return () => clearInterval(intervalRef);
  }, [changed, currentDelay, isPaused]);

  return {changedDelay, isPaused, setIsPaused};
};

export { useAutoSlide };
