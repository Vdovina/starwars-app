import { useRef, useCallback } from 'react';

const DEFAULT_DELAY = 1000;

export const useThrottle = <T>(
  callback: (...args: T[]) => void | Promise<void>,
  delay: number = DEFAULT_DELAY,
  runAfterTimeout: boolean = false,
) => {
  const isWaiting = useRef<boolean>(false);
  const savedArgs = useRef<T[] | null>(null);

  const throttledCallback = useCallback(
    (...args: T[]) => {
      if (isWaiting.current) {
        savedArgs.current = args;
        return;
      }

      callback(...args);
      isWaiting.current = true;

      setTimeout(() => {
        isWaiting.current = false;
        if (runAfterTimeout && savedArgs.current && JSON.stringify(savedArgs.current) !== JSON.stringify(args)) {
          callback(...savedArgs.current);
          savedArgs.current = null;
        }
      }, delay);
    },
    [callback, delay, runAfterTimeout],
  );

  return throttledCallback;
};
