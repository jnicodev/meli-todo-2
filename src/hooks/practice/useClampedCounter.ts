import { useEffect, useState } from 'react';

import clamp from '../../utils/clamp.ts';

const useClampedCounter = (initialValue: number, min: number, max: number) => {
  if (max < min) {
    throw Error('El valor máximo no debe ser menor que el valor mínimo.');
  }

  const [ value, setValue ] = useState<number>(clamp(initialValue, min, max));

  const increment = () => {
    setValue(prev => clamp(prev + 1, min, max));
  };

  const decrement = () => {
    setValue(prev => clamp(prev - 1, min, max));
  };

  useEffect(() => {
    setValue(prev => {
      const newValue = prev === initialValue ? prev : initialValue;

      return clamp(newValue, min, max);
    });
  }, [ initialValue, max, min ]);

  return {
    decrement,
    increment,
    value,
  };
};

export default useClampedCounter;