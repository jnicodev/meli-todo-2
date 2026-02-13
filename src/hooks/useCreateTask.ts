import type { CreateTaskRequest } from '../types/task.ts';

const useCreateTask = () => {
  const mutate = async (data: CreateTaskRequest) => {
    const response = await fetch('/api/tasks', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Error al crear la tarea desde el hook');
    }

    return await response.json();
  };

  return {
    mutate,
  };
};

export default useCreateTask;