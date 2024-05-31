import { useMemo, useState } from "react";

export interface Binding<T> {
  getValue(): T;
  map<U>(predicate: (value: T) => U): Binding<U>;
}

export function useBinding<T>(
  initialValue: T
): [Binding<T>, (newValue: T) => void] {
  const [value, setValue] = useState(initialValue);
  const binding: Binding<T> = useMemo(() => {
    return {
      getValue: () => value,
      map: (predicate) => useBinding(predicate(value))[0],
    };
  }, [value]);
  return [binding, setValue];
}
