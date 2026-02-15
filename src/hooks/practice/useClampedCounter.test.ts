import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import useClampedCounter from './useCampledCounter.ts';

describe('useClampedCounter', () => {
  test('usa el valor inicial personalizado', () => {
    const { result } = renderHook(() => useClampedCounter(5, 0, 10));

    expect(result.current.value).toBe(5);
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

    rerender({ initialValue: 6 });

    expect(result.current.value).toBe(6);
  });

  test('el valor mínimo se actualiza cuando cambia su prop', () => {
    const { rerender, result } = renderHook(
      ({ min }) => useClampedCounter(5, min, 10),
      {
        initialProps: {
          min: 0,
        }
      }
    );

    rerender({ min: 6 });

    expect(result.current.value).toBe(6);
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

    rerender({ max: 15 });

    expect(result.current.value).toBe(10);
  });

  test('no supera el valor máximo', () => {
    const { result } = renderHook(() => useClampedCounter(5, 0, 10));

    for (let i = 0; i < 6; i++) {
      act(() => {
        result.current.increment();
      });
    }

    expect(result.current.value).toBe(10);
  });

  test('no supera el valor mínimo', () => {
    const { result } = renderHook(() => useClampedCounter(5, 0, 10));

    for (let i = 0; i < 6; i++) {
      act(() => {
        result.current.decrement();
      });
    }

    expect(result.current.value).toBe(0);
  });
});