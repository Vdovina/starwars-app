import { act as hookAct, renderHook } from '@testing-library/react-hooks';
import { useThrottle } from './use-throttle';

describe('useThrottle Tests', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('should call function twice', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottle(callback));
    hookAct(() => {
      result.current();
      setTimeout(() => result.current(), 500);
      setTimeout(() => result.current(), 1000);
      setTimeout(() => result.current(), 1100);
    });
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should run after timeout one more time', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottle(callback, 1000, true));
    hookAct(() => {
      result.current(0);
      setTimeout(() => result.current(1), 900);
    });
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback.mock.calls[0][0]).toEqual(0);
    expect(callback.mock.calls[1][0]).toEqual(1);
  });
});
