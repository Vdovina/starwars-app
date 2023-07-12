import { act as hookAct, renderHook } from '@testing-library/react-hooks';
import { useDebounce } from './use-debounce';

describe('useDebounce Tests', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('should change value in 5 sec', () => {
    let value = 'Test';
    const hook = renderHook(() => useDebounce(value, 5));
    hookAct(() => {
      value = 'Test2';
      hook.rerender();
    });
    expect(hook.result.current).toEqual('Test');
    jest.advanceTimersByTime(5);
    expect(hook.result.current).toEqual('Test2');
  });
});
