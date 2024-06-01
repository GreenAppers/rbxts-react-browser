import React from "react";
import { Binding } from "./binding";
import { InstanceChangeEvent, InstanceEvent } from "./instance";

export interface TextButtonProps {
  Active?: boolean | Binding<boolean>;
  AnchorPoint?: Vector2 | Binding<Vector2>;
  AutoButtonColor?: boolean | Binding<boolean>;
  BackgroundColor3?: Color3 | Binding<Color3>;
  BackgroundTransparency?: number | Binding<number>;
  BorderSizePixel?: number | Binding<number>;
  Change?: InstanceChangeEvent<any>;
  ClipsDescendants?: boolean | Binding<boolean>;
  Event?: InstanceEvent<any>;
  children?: any[];
  LayoutOrder?: number | Binding<number>;
  Position?: UDim2 | Binding<UDim2>;
  Size?: UDim2 | Binding<UDim2>;
  Text?: string | Binding<string>;
  TextColor3?: Color3 | Binding<Color3>;
  TextScaled?: boolean | Binding<boolean>;
  TextSize?: number | Binding<number>;
  Visible?: boolean | Binding<boolean>;
  ZIndex?: number | Binding<number>;
}

export function TextButton(props: TextButtonProps) {
  return (
    <span
      style={{
        backgroundColor: props.BackgroundColor3?.toString(),
        color: props.TextColor3?.toString(),
      }}
    >
      {props.Text?.toString() || ""}
    </span>
  );
};
