import { Binding } from "./binding";
import { InstanceChangeEvent, InstanceEvent, RobloxInstance } from "./instance";

export interface FrameProps {
  AnchorPoint?: Vector2 | Binding<Vector2>;
  BackgroundColor3?: Color3 | Binding<Color3>;
  BackgroundTransparency?: number | Binding<number>;
  BorderSizePixel?: number | Binding<number>;
  Change?: InstanceChangeEvent<Frame>;
  children?: any[];
  ClipsDescendants?: boolean | Binding<boolean>;
  Event?: InstanceEvent<Frame>;
  LayoutOrder?: number | Binding<number>;
  Position?: UDim2 | Binding<UDim2>;
  ref?: any;
  Rotation?: number | Binding<number>;
  Size?: UDim2 | Binding<UDim2>;
  Visible?: boolean | Binding<boolean>;
  ZIndex?: number | Binding<number>;
}

export class Frame extends RobloxInstance<FrameProps> {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.BackgroundColor3?.toString(),
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
