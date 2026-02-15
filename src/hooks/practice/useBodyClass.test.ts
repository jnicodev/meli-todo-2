import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import useBodyClass from './useBodyClass.ts';

describe('useBodyClass', () => {
  test('usa el valor inicial', () => {
    renderHook(() => useBodyClass('new-class'));

    expect(document.body.classList.contains('new-class')).toBe(true);
  });

  test('el valor inicial se actualiza cuando cambia su prop', () => {
    const { rerender } = renderHook(
      ({ initialValue }) => useBodyClass(initialValue),
      {
        initialProps: {
          initialValue: 'new-class',
        }
      }
    );

    expect(document.body.classList.contains('new-class')).toBe(true);

    rerender({ initialValue: 'other-class' });

    expect(document.body.classList.contains('other-class')).toBe(true);
  });

  test('elimina la clase cuando el componente se desmonta', () => {
    const { unmount } = renderHook(() => useBodyClass('new-class'));

    expect(document.body.classList.contains('new-class')).toBe(true);

    unmount();

    expect(document.body.classList.contains('new-class')).toBe(false);
  });
});