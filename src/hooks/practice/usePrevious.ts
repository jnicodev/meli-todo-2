import { useEffect, useRef } from 'react';

const usePrevious = <T>(nextValue: T) => {
  const value = useRef<T>(undefined);

  useEffect(() => {
    value.current = nextValue;
  }, [ nextValue ]);

  return {
    value: value.current,
  };
};

export default usePrevious;