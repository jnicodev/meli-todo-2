import { useEffect } from 'react';

const useBodyClass = (initialClass: string) => {
  useEffect(() => {
    document.body.classList.add(initialClass);

    return () => {
      document.body.classList.remove(initialClass);
    };
  }, [ initialClass ]);
};

export default useBodyClass;