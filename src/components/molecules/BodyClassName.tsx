import useBodyClass from '../../hooks/practice/useBodyClass.ts';

interface BodyClassNameProps {
  initialClass: string;
}

const BodyClassName = ({ initialClass }: BodyClassNameProps) => {
  useBodyClass(initialClass);

  return (
    <div>
      <h2>
        useBodyClass
      </h2>

      <span>
        class="
        { initialClass }
        "
      </span>
    </div>
  );
};

export default BodyClassName;