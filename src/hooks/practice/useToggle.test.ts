import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import useToggle from './useToggle.ts';

describe('useToggle', () => {
  test('usa el valor inicial por defecto', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);
  });

  test('usa el valor inicial personalizado', () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBe(true);
  });

  test('toggle() invierte el valor actual', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(false);
  });

  test('toggle() invierte el valor actual correctamente con múltiples llamadas seguidas', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggle();
      result.current.toggle();
    });

    expect(result.current.value).toBe(false);
  });

  test('setTrue() cambia el valor a "true"', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);
  });

  test('setFalse() cambia el valor a "false"', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBe(false);
  });
});