import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import usePrevious from './usePrevious.ts';

describe('usePrevious', () => {
  test('devuelve el valor anterior', () => {
    const { rerender, result } = renderHook(
      ({ nextValue }) => usePrevious(nextValue),
      {
        initialProps: {
          nextValue: 1,
        }
      }
    );

    expect(result.current.value).toBe(undefined);

    rerender({ nextValue: 2 });

    expect(result.current.value).toBe(1);
  });
});