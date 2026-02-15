import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import useClampedCounter from './useClampedCounter.ts';

describe('useClampedCounter', () => {
  test('usa el valor inicial personalizado', () => {
    const { result } = renderHook(() => useClampedCounter(5, 0, 10));

    expect(result.current.value).toBe(5);
  });

  test('el valor mínimo debe ser menor que el valor máximo', () => {
    expect(() => renderHook(() => useClampedCounter(5, 10, 0))).toThrowError('El valor máximo no debe ser menor que el valor mínimo.');
  });

  test('el valor inicial se ajusta si supera el valor mínimo', () => {
    const { result } = renderHook(() => useClampedCounter(-5, 0, 10));

    expect(result.current.value).toBe(0);
  });

  test('el valor inicial se ajusta si supera el valor máximo', () => {
    const { result } = renderHook(() => useClampedCounter(15, 0, 10));

    expect(result.current.value).toBe(10);
  });

  test('el valor inicial se actualiza cuando cambia su prop', () => {
    const { rerender, result } = renderHook(
      ({ initialValue }) => useClampedCounter(initialValue, 0, 10),
      {
        initialProps: { initialValue: 5 }
      });

    expect(result.current.value).toBe(5);

    rerender({ initialValue: 6 });

    expect(result.current.value).toBe(6);
  });

  test('el valor mínimo se actualiza cuando cambia su prop', () => {
    const { rerender, result } = renderHook(
      ({ min }) => useClampedCounter(5, min, 20),
      {
        initialProps: {
          min: 10,
        }
      }
    );

    expect(result.current.value).toBe(10);

    rerender({ min: 15 });

    expect(result.current.value).toBe(15);
  });

  test('el valor máximo se actualiza cuando cambia su prop', () => {
    const { rerender, result } = renderHook(
      ({ max }) => useClampedCounter(20, 0, max),
      {
        initialProps: {
          max: 10,
        }
      }
    );

    expect(result.current.value).toBe(10);

    rerender({ max: 15 });

    expect(result.current.value).toBe(15);
  });

  test('no supera el valor máximo', () => {
    const { result } = renderHook(() => useClampedCounter(5, 0, 10));

    act(() => {
      for (let i = 0; i < 20; i++) {
        result.current.increment();
      }
    });

    expect(result.current.value).toBe(10);
  });

  test('no supera el valor mínimo', () => {
    const { result } = renderHook(() => useClampedCounter(5, 0, 10));

    act(() => {
      for (let i = 0; i < 20; i++) {
        result.current.decrement();
      }
    });

    expect(result.current.value).toBe(0);
  });
});