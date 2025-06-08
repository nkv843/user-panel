import { useEffect, useState } from 'react';

export const useDebouncedState = <S>(initialState: S | (() => S), delay: number) => {
  const [state, setState] = useState(initialState);
  const [debouncedState, setDebouncedState] = useState(initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => clearTimeout(timeout);
  }, [state, delay]);

  return [debouncedState, [state, setState]] as const;
}
