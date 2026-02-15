import { useEffect, useState } from 'react';

import clamp from '../../utils/clamp.ts';

const useClampedCounter = (initialValue: number, min: number, max: number) => {
  const [ value, setValue ] = useState<number>(clamp(initialValue, min, max));

  const increment = () => {
    setValue(prev => clamp(prev + 1, min, max));
  };

  const decrement = () => {
    setValue(prev => clamp(prev - 1, min, max));
  };

  useEffect(() => {
    setValue(clamp(initialValue, min, max));
  }, [ initialValue ]);

  useEffect(() => {
    setValue(prev => clamp(prev, min, max));
  }, [ max, min ]);

  return {
    decrement,
    increment,
    value,
  };
};

export default useClampedCounter;