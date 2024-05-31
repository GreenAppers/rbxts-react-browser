import React from "react";

export interface TextButtonProps {
  BackgroundColor3?: Color3;
  BackgroundTransparency?: number;
  Position?: UDim2;
  Size?: UDim2;
  Text?: String;
  TextColor3?: Color3;
  TextScaled?: boolean;
  TextSize?: number;
}

export class TextButton
  extends React.Component<TextButtonProps>
  implements Instance
{
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

  render() {
    return (
      <span
        style={{
          backgroundColor: this.props.BackgroundColor3?.toString(),
          color: this.props.TextColor3?.toString(),
        }}
      >
        {this.props.Text || ""}
      </span>
    );
  }
}
