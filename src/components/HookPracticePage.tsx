import { Link } from 'react-router';

import useClampedCounter from '../hooks/practice/useClampedCounter.ts';
import useToggle from '../hooks/practice/useToggle.ts';
import BodyClassName from './molecules/BodyClassName.tsx';
import PreviousValue from './molecules/PreviousValue.tsx';

const bodyClasses = [ 'hola', 'chao', 'buenas', 'vamos' ];

const HookPracticePage = () => {
  const randomNumber = Math.floor(Math.random() * 50);
  const randomBodyClass = bodyClasses[Math.floor(Math.random() * 3)];
  const { setFalse: setToggleFalse, setTrue: setToggleTrue, toggle, value: toggleValue } = useToggle();
  const { decrement: decrementClampedCounter, increment: incrementClampedCounter, value: clampedCounter } = useClampedCounter(5, 0, 10);

  return (
    <>
      <Link to='/'>
        Home
      </Link>

      <h2>
        useToggle
      </h2>

      <div>
        <span>
          { String(toggleValue) }
        </span>

        <button onClick={ toggle }>
          Toggle
        </button>

        <button onClick={ setToggleTrue }>
          Cambiar a true
        </button>

        <button onClick={ setToggleFalse }>
          Cambiar a false
        </button>
      </div>

      <h2>
        useClampedCounter
      </h2>

      <div>
        <button onClick={ decrementClampedCounter }>
          -
        </button>

        <span>
          { clampedCounter }
        </span>

        <button onClick={ incrementClampedCounter }>
          +
        </button>
      </div>

      <PreviousValue nextValue={ randomNumber } />

      <BodyClassName initialClass={ randomBodyClass } />
    </>
  );
};

export default HookPracticePage;