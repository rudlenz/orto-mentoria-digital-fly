
import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  trigger?: boolean;
}

export const useTypewriter = ({ text, speed = 50, trigger = true }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, trigger]);

  useEffect(() => {
    if (trigger) {
      setDisplayText('');
      setCurrentIndex(0);
    }
  }, [trigger]);

  return displayText;
};
