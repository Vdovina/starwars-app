import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number = 500) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounceValue;
};
