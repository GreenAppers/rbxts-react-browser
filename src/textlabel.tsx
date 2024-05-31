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

export const TextLabel = (props: TextLabelProps) => {
  return (
    <span
      style={{
        backgroundColor: props.BackgroundColor3?.toString(),
        color: props.TextColor3?.toString(),
      }}
    >
      {props.Text || ""}
    </span>
  );
};
