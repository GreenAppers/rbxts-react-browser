import React from "react";
import { Binding } from "./binding";
import { InstanceChangeEvent, InstanceEvent } from "./instance";

export interface TextLabelProps {
  AutomaticSize?: Enum.AutomaticSize | "X" | "Y" | "XY" | "None";
  AnchorPoint?: Vector2 | Binding<Vector2>;
  BackgroundColor3?: Color3 | Binding<Color3>;
  BackgroundTransparency?: number | Binding<number>;
  Change?: InstanceChangeEvent<any>;
  ClipsDescendants?: boolean | Binding<boolean>;
  Event?: InstanceEvent<any>;
  Font?: Enum.Font | Binding<Enum.Font>;
  FontFace?: Font | Binding<Font>;
  children?: any[];
  LayoutOrder?: number | Binding<number>;
  LineHeight?: number | Binding<number>;
  MaxVisibleGraphemes?: number | Binding<number>;
  Position?: UDim2 | Binding<UDim2>;
  RichText?: boolean | Binding<boolean>;
  Size?: UDim2 | Binding<UDim2>;
  Text?: string | Binding<string>;
  TextColor3?: Color3 | Binding<Color3>;
  TextScaled?: boolean | Binding<boolean>;
  TextSize?: number | Binding<number>;
  TextTransparency?: number | Binding<number>;
  TextTruncate?: Enum.TextTruncate | Binding<Enum.TextTruncate>;
  TextWrapped?: boolean | Binding<boolean>;
  TextXAlignment?: Enum.TextXAlignment | Binding<Enum.TextXAlignment>;
  TextYAlignment?: Enum.TextYAlignment | Binding<Enum.TextYAlignment>;
  Visible?: boolean | Binding<boolean>;
  ZIndex?: number | Binding<number>;
}

export function TextLabel(props: TextLabelProps) {
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
