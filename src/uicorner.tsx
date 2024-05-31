import { Binding } from "./binding";
import { RobloxInstance } from "./instance";

export interface UICornerProps {
  CornerRadius?: UDim | Binding<UDim>;
}

export class UICorner extends RobloxInstance<UICornerProps> {
  render() {
    return <></>;
  }
}
