import { fireEvent, render, screen, waitFor, } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import CreateTaskPage from './CreateTaskPage.tsx';

describe('Crear tarea', () => {
  describe('Nombre', () => {
    beforeEach(() => {
      render(<CreateTaskPage />);
    });

    test('debe renderizarse en el estado inicial del formulario', () => {
      const nameInput = screen.getByRole('textbox', { name: 'Nombre' });
      expect(nameInput).toBeInTheDocument();
    });

    test('debe estar referenciado por un label', () => {
      const nameInput = screen.getByRole('textbox', { name: 'Nombre' });
      expect(nameInput).toBeInTheDocument();
    });

    test('debe iniciar vacío', () => {
      const nameInput = screen.getByRole('textbox', { name: 'Nombre' });
      expect(nameInput).not.toHaveValue();
    });

    test('debe incluirse al enviar el formulario', async () => {
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
      const createTaskForm = screen.getByRole('form', { name: 'Formulario crear tarea' }); ;

      fireEvent.submit(createTaskForm);

      await waitFor(() => {
        expect(alertSpy).toHaveBeenCalledWith('Ingresa el nombre');
      });
    });

    test('debe reiniciarse al enviar el formulario', async () => {
      const createTaskForm = screen.getByRole('form', { name: 'Formulario crear tarea' }); ;
      const nameInput = screen.getByRole('textbox', { name: 'Nombre' });

      fireEvent.change(nameInput, { target: { value: 'Tarea de prueba' } });
      fireEvent.submit(createTaskForm);

      await waitFor(() => {
        expect(nameInput).not.toHaveValue();
      });
    });
  });

  describe('Botón crear', () => {
    beforeEach(() => {
      render(<CreateTaskPage />);
    });

    test('debe renderizarse en el estado inicial del formulario', () => {
      const button = screen.getByRole('button', { name: 'Crear' });
      expect(button).toBeInTheDocument();
    });

    test('debe enviar el formulario al ser pulsado', () => {
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
      const button = screen.getByRole('button', { name: 'Crear' });

      fireEvent.click(button);

      expect(alertSpy).toHaveBeenCalled();
    });
  });

  test('puede crear una tarea cuando todos los campos son válidos', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<CreateTaskPage />);

    const nameInput = screen.getByRole('textbox', { name: 'Nombre' });
    const createTaskButton = screen.getByRole('button', { name: 'Crear' });

    fireEvent.change(nameInput, { target: { value: 'Nueva tarea' } });
    fireEvent.click(createTaskButton);

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Tarea creada');
    });
  });
});