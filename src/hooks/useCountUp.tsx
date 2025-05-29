
import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration: number;
  start?: number;
  trigger?: boolean;
}

export const useCountUp = ({ end, duration, start = 0, trigger = true }: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) {
      setCount(start);
      return;
    }

    startTimeRef.current = null;
    
    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      
      const progress = Math.min((currentTime - startTimeRef.current) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = start + (end - start) * easeOutQuart;
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration, start, trigger]);

  return count;
};
