import { useMemo, useState } from "react";

export interface Binding<T> {
  toString(): string;
  getValue(): T;

  /**
   * Returns a new binding that maps the existing binding's value to something else. For example, `map` can be used to
   * transform an animation progress value like `0.4` into a property that can be consumed by a Roblox Instance like
   * `UDim2.new(0.4, 0, 1, 0)`.
   */
  map<U>(predicate: (value: T) => U): Binding<U>;
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
      map: (predicate) => {
        const mappedValue = predicate(value);
        return useBinding(mappedValue)[0];
      },
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
export function joinBindings<T>(
  bindings: ReadonlyArray<Binding<T>>
): Binding<Array<T>> {
  const value = bindings.map((binding) => binding.getValue());
  return {
    getValue: () => value,
    toString: () => value.toString(),
    map: (predicate) => {
      const mappedValue = predicate(value);
      return useBinding(mappedValue)[0];
    },
  };
}
