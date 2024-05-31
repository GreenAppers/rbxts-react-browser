import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Color3 } from "./color3";
import { math } from './math'
import { TextLabelProps } from "./textlabel";
import { UDim2 } from "./udim2";

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


export class game {
  static PlaceId: number = 0;
}

export class os {
  static clock(): number {
    return new Date().getTime() / 1000.0;
  }
}

export class task {
  static wait(seconds: number): void {}
}

declare global {
  interface Instance {
    Name: String;
    Parent?: Instance;
    Destroy: () => void;
    FindFirstChild: <X = Instance>(name: string) => X | undefined;
    GetChildren: <X = Instance>(this: Instance) => Array<X>;
    WaitForChild: <X = Instance>(
      this: Instance,
      childName: string | number
    ) => X;
  }

  interface CreatableInstances {
    Sound: Sound;
  }

  interface InstanceConstructor {
    new <T extends keyof CreatableInstances>(
      className: T,
      parent?: Instance
    ): CreatableInstances[T];
  }

  const Instance: InstanceConstructor;

  interface Sound extends Instance {
    Ended: RBXScriptSignal;
    Looped: boolean;
    Play: () => void;
    PlaybackSpeed: number;
    SoundId: string;
    Volume: number;
  }

  interface RBXScriptSignal {
    Connect(callback: () => void): void;
    Disconnect(): void;
  }

  class Color3 {
    R: number;
    G: number;
    B: number;
    constructor(r: number, g: number, b: number);
    toString(): string;
    static fromRGB(r: number, g: number, b: number): Color3;
  }

  class UDim2 {
    constructor(xs: number, xo: number, ys: number, yo: number);
  }

  class Vector2 {
    X: number;
    Y: number;
    constructor(x: number, y: number);
  }

  class math {
    static clamp(value: number, min: number, max: number): number;
    static max(x: number, y: number): number;
    static min(x: number, y: number): number;
    static sin(x: number): number;
    static cos(x: number): number;
    static tan(x: number): number;
    static asin(x: number): number;
    static acos(x: number): number;
    static atan(x: number): number;
    static atan2(y: number, x: number): number;
    static sqrt(x: number): number;
    static exp(x: number): number;
    static log(x: number): number;
    static abs(x: number): number;
    static sign(x: number): -1 | 0 | 1;
  }

  class game {
    static PlaceId: number;
  }

  class os {
    static clock(): number;
  }

  class task {
    static wait(seconds: number): void;
  }

  namespace JSX {
    interface IntrinsicElements {
      textlabel: TextLabelProps;
    }
  }
}

(globalThis as any).Instance = Instance;
(globalThis as any).Color3 = Color3;
(globalThis as any).UDim2 = UDim2;
(globalThis as any).math = math;
(globalThis as any).os = os;
(globalThis as any).task = task;
