import usePrevious from '../../hooks/practice/usePrevious.ts';

interface PreviousValueProps {
  nextValue: never;
}

const PreviousValue = ({ nextValue } : PreviousValueProps) => {
  const { value } = usePrevious(nextValue);

  return (
    <div>
      <h2>
        usePrevious
      </h2>

      <p>
        El valor anterior era
        { ' ' }

        { String(value) }
      </p>

      <div>
        El nuevo valor es
        { ' ' }

        { String(nextValue) }
      </div>
    </div>
  );
};

export default PreviousValue;