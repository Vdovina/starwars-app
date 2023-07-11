import { useState, useCallback } from 'react';

const DEFAULT_DELAY = 1000;

export const useThrottle = <T>(
  callback: (...args: T[]) => void | Promise<void>,
  delay: number = DEFAULT_DELAY,
  runAfterTimeout: boolean = false,
) => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [savedArgs, setSavedArgs] = useState<T[] | null>(null);

  const throttledCallback = useCallback(
    (...args: T[]) => {
      if (isWaiting) {
        setSavedArgs(args);
        return;
      }

      callback(...args);
      setIsWaiting(true);

      setTimeout(() => {
        setIsWaiting(false);
        if (runAfterTimeout && savedArgs && JSON.stringify(savedArgs) !== JSON.stringify(args)) {
          callback(...savedArgs);
          setSavedArgs(null);
        }
      }, delay);
    },
    [callback],
  );

  return throttledCallback;
};
