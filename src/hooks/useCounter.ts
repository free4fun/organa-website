import { useState, useCallback } from 'react';

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  const animate = useCallback((shouldAnimate: boolean) => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return [count, animate] as const;
};

export default useCounter;