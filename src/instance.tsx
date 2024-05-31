import React from "react";

/** A function type which is assignable to any other function type (and any function is assignable to). */
export type Callback = (...args: Array<any>) => any;

/** Returns a union of all the keys of T whose values extend from U */
export type ExtractKeys<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

/** Returns a union of all the keys of T whose values do not extend from U */
export type ExcludeKeys<T, U> = {
  [K in keyof T]: T[K] extends U ? never : K;
}[keyof T];

/** Given an Instance `T`, returns a unioned type of all property names. */
export type InstancePropertyNames<T extends Instance> = Exclude<
  ExcludeKeys<T, RBXScriptSignal | Callback | symbol>,
  "Changed"
>;

export type InstanceEvent<T extends Instance> = {
  [K in ExtractKeys<T, RBXScriptSignal>]?: T[K] extends RBXScriptSignal<
    infer F extends (...args: any) => any
  >
    ? (rbx: T, ...args: Parameters<F>) => void
    : never;
};

export type InstanceChangeEvent<T extends Instance> = {
  [key in InstancePropertyNames<T>]?: (rbx: T) => void;
};

export class RobloxInstance<Props>
  extends React.Component<Props>
  implements Instance
{
  children = [];
  Name = "";

  Destroy() {}

  FindFirstChild(_name: string) {
    return undefined;
  }

  GetChildren() {
    return [];
  }

  WaitForChild<X>(_childName: string | number): X {
    throw new Error("");
  }
}
