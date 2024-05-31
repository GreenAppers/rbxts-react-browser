import { Binding } from "./binding";
import { InstanceChangeEvent, InstanceEvent, RobloxInstance } from "./instance";

export interface TextButtonProps {
  Active?: boolean | Binding<boolean>;
  AnchorPoint?: Vector2 | Binding<Vector2>;
  AutoButtonColor?: boolean | Binding<boolean>;
  BackgroundColor3?: Color3 | Binding<Color3>;
  BackgroundTransparency?: number | Binding<number>;
  BorderSizePixel?: number | Binding<number>;
  Change?: InstanceChangeEvent<TextButton>;
  ClipsDescendants?: boolean | Binding<boolean>;
  Event?: InstanceEvent<TextButton>;
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

export class TextButton extends RobloxInstance<TextButtonProps> {
  render() {
    return (
      <span
        style={{
          backgroundColor: this.props.BackgroundColor3?.toString(),
          color: this.props.TextColor3?.toString(),
        }}
      >
        {this.props.Text?.valueOf() || ""}
      </span>
    );
  }
}
