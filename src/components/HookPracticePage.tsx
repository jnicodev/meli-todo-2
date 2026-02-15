import useClampedCounter from '../hooks/practice/useClampedCounter.ts';
import useToggle from '../hooks/practice/useToggle.ts';

const HookPracticePage = () => {
  const { setFalse: setToggleFalse, setTrue: setToggleTrue, toggle, value: toggleValue } = useToggle();
  const { decrement: decrementClampedCounter, increment: incrementClampedCounter, value: clampedCounter } = useClampedCounter(5, 0, 10);

  return (
    <>
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
    </>
  );
};

export default HookPracticePage;