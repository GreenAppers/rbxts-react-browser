import React, {
  createContext,
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Binding, createBinding, useBinding, joinBindings } from "./binding";
import { Color3 } from "./color";
import { Callback, InstanceEvent, InstanceChangeEvent } from "./instance";
import { Font } from "./font";
import { Frame, FrameProps } from "./frame";
import { math } from "./math";
import { TextButton, TextButtonProps } from "./textbutton";
import { TextLabel, TextLabelProps } from "./textlabel";
import { UICorner, UICornerProps } from "./uicorner";
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
  useContext,
  useEffect,
  useMemo,
  useState,
};

export type InferEnumNames<T> = T;

export function print(...args: any[]): void {
  console.log(args)
}

export function $tuple(...args: any[]): any {
  return args;
}

export function typeOf<T>(value: T): string {
  return typeof value;
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
  interface Instance extends Record<string, any> {
    //Parent?: Object
    //Destroy?: () => void
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
    enum UserInputType {
      Keyboard = "Keyboard",
      MouseButton1 = "MouseButton1",
      MouseButton2 = "MouseButton2",
      MouseButton3 = "MouseButton3",
      MouseMovement = "MouseMovement",
      MouseWheel = "MouseWheel",
      Touch = "Touch",
      Accelerometer = "Accelerometer",
      Gyro = "Gyro",
      Gamepad1 = "Gamepad1",
      Gamepad2 = "Gamepad2",
      Gamepad3 = "Gamepad3",
      Gamepad4 = "Gamepad4",
      Gamepad5 = "Gamepad5",
      Gamepad6 = "Gamepad6",
      Gamepad7 = "Gamepad7",
      Gamepad8 = "Gamepad8",
      TextInput = "TextInput",
      InputMethod = "InputMethod",
      None = "None",
    }
  }

  class CFrame {
    Position: Vector3;
    LookVector: Vector3;
    RightVector: Vector3;
    UpVector: Vector3;

    constructor(
      x: number,
      y: number,
      z: number,
      R00: number,
      R01: number,
      R02: number,
      R10: number,
      R11: number,
      R12: number,
      R20: number,
      R21: number,
      R22: number
    );
  }

  class Font {
    constructor(name?: string, weight?: Enum.FontWeight);
    static fromEnum(font: Enum.Font): Font;
  }

  type Frame = Instance & ((props: FrameProps) => JSX.Element);
  function Frame(props: FrameProps): JSX.Element;

  type LuaTuple<T> = T;

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

  type UICorner = Instance & ((props: UICornerProps) => JSX.Element);
  type TextButton = Instance & ((props: TextButtonProps) => JSX.Element);
  type TextLabel = Instance & ((props: TextLabelProps) => JSX.Element);

  function UICorner(props: UICornerProps): JSX.Element;
  function TextButton(props: TextButtonProps): JSX.Element;
  function TextLabel(props: TextLabelProps): JSX.Element;

  class Vector2 {
    X: number;
    Y: number;
    constructor(x: number, y: number);
    get Magnitude(): number;
  }

  class Vector3 {
    X: number;
    Y: number;
    Z: number;
    constructor(x: number, y: number, z: number);
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

  function print(...args: any[]): void;  
  function $tuple(...args: any[]): any;
  function typeOf<T>(value: T): string;

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

(globalThis as any).Color3 = Color3;
(globalThis as any).Font = Font;
(globalThis as any).UDim = UDim;
(globalThis as any).UDim2 = UDim2;
(globalThis as any).Vector2 = Vector2;
(globalThis as any).game = game;
(globalThis as any).math = math;
(globalThis as any).os = os;
(globalThis as any).task = task;
(globalThis as any).print = print;
(globalThis as any).$tuple = $tuple;
(globalThis as any).typeOf = typeOf;

(globalThis as any).Instance = (type: string) => {
  switch (type) {
    case "Color3":
      return new Color3();
    default:
      return {};
  }
};

(globalThis as any).Enum = {
  AutomaticSize: {
    None: "None",
    X: "X",
    Y: "Y",
    XY: "XY",
  },
  EasingDirection: {
    In: "In",
    Out: "Out",
    InOut: "InOut",
  },
  EasingStyle: {
    Linear: "Linear",
    Sine: "Sine",
    Back: "Back",
    Quad: "Quad",
    Quart: "Quart",
    Quint: "Quint",
    Bounce: "Bounce",
    Elastic: "Elastic",
    Exponential: "Exponential",
    Circular: "Circular",
    Cubic: "Cubic",
  },
  Font: {
    RobotoMono: "RobotoMono",
    Unknown: "Unknown",
  },
  FontWeight: {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Heavy: 900,
  },
  TextXAlignment: {
    Center: "Center",
    Left: "Left",
    Right: "Right",
  },
  TextYAlignment: {
    Center: "Center",
    Bottom: "Bottom",
    Top: "Top",
  },
  TextTruncate: {
    AtEnd: "AtEnd",
    None: "None",
    SplitWord: "SplitWord",
  },
  UserInputType: {
    Keyboard: "Keyboard",
    MouseButton1: "MouseButton1",
    MouseButton2: "MouseButton2",
    MouseButton3: "MouseButton3",
    MouseMovement: "MouseMovement",
    MouseWheel: "MouseWheel",
    Touch: "Touch",
    Accelerometer: "Accelerometer",
    Gyro: "Gyro",
    Gamepad1: "Gamepad1",
    Gamepad2: "Gamepad2",
    Gamepad3: "Gamepad3",
    Gamepad4: "Gamepad4",
    Gamepad5: "Gamepad5",
    Gamepad6: "Gamepad6",
    Gamepad7: "Gamepad7",
    Gamepad8: "Gamepad8",
    TextInput: "TextInput",
    InputMethod: "InputMethod",
    None: "None",
  },
};
