import React from "react";
import { Binding } from "./binding";
import { InstanceChangeEvent, InstanceEvent } from "./instance";

export interface FrameProps {
  AnchorPoint?: Vector2 | Binding<Vector2>;
  BackgroundColor3?: Color3 | Binding<Color3>;
  BackgroundTransparency?: number | Binding<number>;
  BorderSizePixel?: number | Binding<number>;
  Change?: InstanceChangeEvent<any>;
  children?: any[];
  ClipsDescendants?: boolean | Binding<boolean>;
  Event?: InstanceEvent<any>;
  LayoutOrder?: number | Binding<number>;
  Position?: UDim2 | Binding<UDim2>;
  ref?: any;
  Rotation?: number | Binding<number>;
  Size?: UDim2 | Binding<UDim2>;
  Visible?: boolean | Binding<boolean>;
  ZIndex?: number | Binding<number>;
}

export function Frame(props: FrameProps) {
  return (
    <div
      style={{
        backgroundColor: props.BackgroundColor3?.toString(),
      }}
    >
      {props.children}
    </div>
  );
};
