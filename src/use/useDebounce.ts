import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay ?? 500);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounceValue;
};
