import { http, HttpResponse } from 'msw';

import type { CreateTaskRequest } from '../types/task.ts';

const tasks = [];

export const handlers = [
  http.post<never, CreateTaskRequest>('/api/tasks', async ({ request }) => {
    const newTask = await request.json();

    const task = {
      id: crypto.randomUUID(),
      ...newTask,
    };

    tasks.push(task);

    return HttpResponse.json(task, {
      status: 201,
    });
  }),
];