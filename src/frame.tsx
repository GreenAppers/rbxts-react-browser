import { Binding } from "./binding";
import { RobloxInstance } from "./instance";

export interface FrameProps {
  BackgroundColor3?: Color3;
  children?: any[];
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
