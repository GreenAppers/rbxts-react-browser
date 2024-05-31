import { useMemo, useState } from "react";

export interface Binding<T> {
  toString(): string;
  getValue(): T;
}

/**
 * `useBinding` lets you create a binding object that can be used to store a
 * value and update it without causing a re-render.
 */
export function useBinding<T>(
  initialValue: T
): [Binding<T>, (newValue: T) => void] {
  const [value, setValue] = useState(initialValue);
  const binding: Binding<T> = useMemo(() => {
    return {
      getValue: () => value,
      toString: () => value?.toString() ?? "",
    };
  }, [value]);
  return [binding, setValue];
}

/**
 * The first value returned is a `Binding` object, which will typically be passed as a prop to a Roact host
 * component. The second is a function that can be called with a new value to update the binding.
 */
export const createBinding = useBinding;

/**
 * Combines multiple bindings into a single binding. The new binding's value will have the same keys as the input
 * table of bindings.
 */
export function joinBindings<T extends { [index: string | number]: Binding<U> }, U>(
  bindings: T
): Binding<{ [K in keyof T]: T[K] extends Binding<infer V> ? V : never }> {
  const value = Object.fromEntries(
    Object.entries(bindings).map(([key, binding]) => [key, binding.getValue()])
  ) as { [K in keyof T]: T[K] extends Binding<infer V> ? V : never };
  return {
    getValue: () => value,
    toString: () => value?.toString() ?? "",
  };
}