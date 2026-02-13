import { type ChangeEvent, type SubmitEvent, useState } from 'react';

import type { CreateTaskRequest } from '../types/task.ts';

import useCreateTask from '../hooks/useCreateTask.ts';

const CreateTaskPage = () => {
  const { mutate: createTask } = useCreateTask();

  // STATES
  const [ formData, setFormData ] = useState<CreateTaskRequest>({
    name: '',
  });

  // METHODS
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name) {
      return alert('Ingresa el nombre');
    }

    try {
      await createTask(formData);

      setFormData({
        name: '',
      });

      alert('Tarea creada');
    } catch (error: unknown) {
      alert('Error al crear la tarea');
      throw error;
    }
  };

  return (
    <form
      data-testid='create-task-form'
      onSubmit={ handleSubmit }
    >
      <div>
        <label htmlFor='name'>
          Nombre
        </label>

        <input
          id='name'
          name='name'
          onChange={ handleFieldChange }
          value={ formData.name }
        />
      </div>

      <button aria-label='Botón crear tarea'>
        Crear
      </button>
    </form>
  );
};

export default CreateTaskPage;