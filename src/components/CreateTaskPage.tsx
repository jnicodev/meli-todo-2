import {type ChangeEvent, type SubmitEvent, useState} from "react";
import useCreateTask from "../hooks/useCreateTask.ts";
import type {CreateTaskRequest} from "../types/task.ts";

const CreateTaskPage = () => {
  const { mutate: createTask } = useCreateTask();

  // STATES
  const [formData, setFormData] = useState<CreateTaskRequest>({
    name: '',
  });

  // METHODS
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name) {
      return alert('Ingresa el nombre');
    }

    try {
      await createTask(formData);

      alert('Tarea creada');
    } catch (error: unknown) {
      alert('Error al crear la tarea');
      throw error;
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Nombre</label>
        <input aria-label='Nombre de la tarea' name='name' onChange={ handleFieldChange } />
      </div>

      <button aria-label='Botón crear tarea'>Crear</button>
    </form>
  );
}

export default CreateTaskPage;