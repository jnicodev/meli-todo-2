import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [ value, setValue ] = useState<boolean>(initialValue);

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  const toggle = () => {
    setValue(prev => !prev);
  };

  return {
    setFalse,
    setTrue,
    toggle,
    value,
  };
};

export default useToggle;