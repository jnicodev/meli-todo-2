import { useState } from 'react';

import type { CreateTaskRequest } from '../types/task.ts';

const useCreateTask = () => {
  const [ isPending, setIsPending ] = useState(false);

  const mutate = async (data: CreateTaskRequest) => {
    setIsPending(true);

    const response = await fetch('/api/tasks', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    setIsPending(false);

    if (!response.ok) {

      throw new Error('Error al crear la tarea desde el hook');
    }

    return await response.json();
  };

  return {
    isPending,
    mutate,
  };
};

export default useCreateTask;