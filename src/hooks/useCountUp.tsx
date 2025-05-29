
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration: number;
  start?: number;
  trigger?: boolean;
}

export const useCountUp = ({ end, duration, start = 0, trigger = true }: UseCountUpProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    const startValue = start;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = startValue + (endValue - startValue) * progress;
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, trigger]);

  return count;
};
