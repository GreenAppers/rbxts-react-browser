import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export default React;
export { createContext, useCallback, useEffect, useMemo, useState };

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

export interface TextLabelProps {
  BackgroundColor3?: Color3;
  BackgroundTransparency?: number;
  Position?: UDim2;
  Size?: UDim2;
  Text?: String;
  TextColor3?: Color3;
  TextScaled?: boolean;
  TextSize?: number;
}

export const TextLabel = (props: TextLabelProps) => {
  return (
    <span
      style={{
        backgroundColor: props.BackgroundColor3?.toString(),
        color: props.TextColor3?.toString(),
      }}
    >
      {props.Text || ""}
    </span>
  );
};

export class Color3 {
  R: number;
  G: number;
  B: number;

  constructor(r: number, g: number, b: number) {
    this.R = r;
    this.G = g;
    this.B = b;
  }

  toString(): string {
    return `rgb(${this.R}, ${this.G}, ${this.B})`;
  }

  static fromRGB(r: number, g: number, b: number): Color3 {
    return new Color3(r, g, b);
  }
}

export class os {
  static clock(): number {
    return new Date().getTime() / 1000.0;
  }
}

export class task {
  static wait(seconds: number): void {}
}


export class UDim2 {
  constructor(xs: number, xo: number, ys: number, yo: number) {}
}

declare global {
  class Color3 {
    R: number;
    G: number;
    B: number;
    constructor(r: number, g: number, b: number);
    toString(): string;
    static fromRGB(r: number, g: number, b: number): Color3;
  }

  interface Instance {
    FindFirstChild<X>(name: string): X | undefined;
    Name: String;
    Parent?: Instance;
    Destroy: () => void;
  }

  interface CreatableInstances {
    Sound: Sound
  }
  
  interface InstanceConstructor {
    new <T extends keyof CreatableInstances>(className: T, parent?: Instance): CreatableInstances[T];
  }
  
  const Instance: InstanceConstructor;

  class os {
    static clock(): number;
  }

  interface RBXScriptSignal {
    Connect(callback: () => void): void;
    Disconnect(): void;
  }

  interface Sound extends Instance {
    Ended: RBXScriptSignal;
    Looped: boolean;
    Play: () => void;
    PlaybackSpeed: number;
    SoundId: string;
    Volume: number;
  }

  class task {
    static wait(seconds: number): void;
  }

  class UDim2 {
    constructor(xs: number, xo: number, ys: number, yo: number);
  }

  namespace JSX {
    interface IntrinsicElements {
      textlabel: TextLabelProps;
    }
  }
}

(globalThis as any).Color3 = Color3;
(globalThis as any).UDim2 = UDim2;
(globalThis as any).Instance = Instance;
(globalThis as any).os = os;
(globalThis as any).task = task;
