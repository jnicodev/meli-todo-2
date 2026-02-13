import { fireEvent, render, screen, waitFor, } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import CreateTaskPage from './CreateTaskPage.tsx';

describe('Crear tarea', () => {
  test('debe incluirse "name"', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<CreateTaskPage />);

    screen.getByLabelText('Botón crear tarea').click();

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Ingresa el nombre');
    });
  });

  test('los campos del formulario se limpian después de crear la tarea', async () => {
    render(<CreateTaskPage />);

    const form = screen.getByTestId('create-task-form');
    const nameInput = screen.getByLabelText('Nombre');

    fireEvent.change(nameInput, { target: { value: 'Tarea de prueba' } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(nameInput).toHaveValue('');
    });
  });

  test('puede crear una tarea cuando todos los campos son válidos', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<CreateTaskPage />);

    const nameInput = screen.getByLabelText('Nombre');
    const createTaskButton = screen.getByLabelText('Botón crear tarea');

    fireEvent.change(nameInput, { target: { value: 'Nueva tarea' } });
    fireEvent.click(createTaskButton);

    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue('Nueva tarea');
    expect(createTaskButton).toBeInTheDocument();

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Tarea creada');
    });
  });
});