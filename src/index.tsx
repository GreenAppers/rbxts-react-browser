import React, {
  createContext,
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Binding, createBinding, useBinding, joinBindings } from "./binding";
import { Color3 } from "./color";
import {
  Callback,
  InstanceEvent,
  InstanceChangeEvent,
  RobloxInstance,
} from "./instance";
import { Font } from "./font";
import { FrameProps } from "./frame";
import { math } from "./math";
import { TextButtonProps } from "./textbutton";
import { TextLabelProps } from "./textlabel";
import { UICornerProps } from "./uicorner";
import { UDim, UDim2 } from "./udim";
import { Vector2 } from "./vector";

export default React;
export type {
  Binding,
  Dispatch,
  InstanceEvent,
  InstanceChangeEvent,
  Ref,
  SetStateAction,
};
export {
  createBinding,
  createContext,
  forwardRef,
  joinBindings,
  useBinding,
  useCallback,
  useEffect,
  useMemo,
  useState,
};

export type InferEnumNames<T> = T;

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

  interface RBXScriptConnection {
    Connected: boolean;
    Disconnect(this: RBXScriptConnection): void;
  }

  interface RBXScriptSignal<T = Callback> {
    Connect(callback: T): RBXScriptConnection;
    Disconnect(): void;
  }

  class Color3 {
    R: number;
    G: number;
    B: number;
    constructor(r?: number, g?: number, b?: number);
    toString(): string;
    Lerp(goal: Color3, alpha: number): Color3;
    static fromRGB(r: number, g: number, b: number): Color3;
  }

  namespace Enum {
    enum AutomaticSize {
      None = "None",
      X = "X",
      Y = "Y",
      XY = "XY",
    }
    enum EasingDirection {
      In = "In",
      Out = "Out",
      InOut = "InOut",
    }
    enum EasingStyle {
      Linear = "Linear",
      Sine = "Sine",
      Back = "Back",
      Quad = "Quad",
      Quart = "Quart",
      Quint = "Quint",
      Bounce = "Bounce",
      Elastic = "Elastic",
      Exponential = "Exponential",
      Circular = "Circular",
      Cubic = "Cubic",
    }
    enum Font {
      RobotoMono = "RobotoMono",
      Unknown = "Unknown",
    }
    enum FontWeight {
      Thin = 100,
      ExtraLight = 200,
      Light = 300,
      Regular = 400,
      Medium = 500,
      SemiBold = 600,
      Bold = 700,
      ExtraBold = 800,
      Heavy = 900,
    }
    enum TextXAlignment {
      Center = "Center",
      Left = "Left",
      Right = "Right",
    }
    enum TextYAlignment {
      Center = "Center",
      Bottom = "Bottom",
      Top = "Top",
    }
    enum TextTruncate {
      AtEnd = "AtEnd",
      None = "None",
      SplitWord = "SplitWord",
    }
  }

  class Font {
    constructor(name?: string, weight?: Enum.FontWeight);
    static fromEnum(font: Enum.Font): Font;
  }

  class Frame extends RobloxInstance<FrameProps> {}

  class UDim {
    Scale: number;
    Offset: number;
    constructor(s: number, o: number);
    Lerp(goal: UDim, alpha: number): UDim;
  }

  class UDim2 {
    X: UDim;
    Y: UDim;
    constructor(xs: number, xo: number, ys: number, yo: number);
    Lerp(goal: UDim2, alpha: number): UDim2;
  }

  class UICorner extends RobloxInstance<UICornerProps> {}

  class TextButton extends RobloxInstance<TextButtonProps> {}

  class TextLabel extends RobloxInstance<TextLabelProps> {}

  class Vector2 {
    X: number;
    Y: number;
    constructor(x: number, y: number);
    get Magnitude(): number;
  }

  class math {
    static huge: number;
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
    static round(x: number): number;
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
      frame: FrameProps;
      textbutton: TextButtonProps;
      textlabel: TextLabelProps;
      uicorner: UICornerProps;
    }
  }
}

(globalThis as any).Instance = Instance;
(globalThis as any).Color3 = Color3;
(globalThis as any).Font = Font;
(globalThis as any).UDim = UDim;
(globalThis as any).UDim2 = UDim2;
(globalThis as any).Vector2 = Vector2;
(globalThis as any).math = math;
(globalThis as any).os = os;
(globalThis as any).task = task;
