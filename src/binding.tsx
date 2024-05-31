import { useMemo, useState } from "react";

export interface Binding<T> {
  toString(): string;
  valueOf(): T;
}

export function useBinding<T>(
  initialValue: T
): [Binding<T>, (newValue: T) => void] {
  const [value, setValue] = useState(initialValue);
  const binding: Binding<T> = useMemo(() => {
    return {
      valueOf: () => value,
      toString: () => value?.toString() ?? '',
    };
  }, [value]);
  return [binding, setValue];
}
