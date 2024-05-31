import { Binding } from "./binding";
import { RobloxInstance } from "./instance";

export interface TextLabelProps {
  BackgroundColor3?: Color3 | Binding<Color3>;
  BackgroundTransparency?: number | Binding<number>;
  Position?: UDim2 | Binding<UDim2>;
  Size?: UDim2 | Binding<UDim2>;
  Text?: string | Binding<string>;
  TextColor3?: Color3 | Binding<Color3>;
  TextScaled?: boolean | Binding<boolean>;
  TextSize?: number | Binding<number>;
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
        {this.props.Text?.toString() || ""}
      </span>
    );
  }
}
