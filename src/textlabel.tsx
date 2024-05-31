import { RobloxInstance } from "./instance";

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

export class TextLabel extends RobloxInstance<TextLabelProps> {
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
