import React from 'react'

export default React

export interface TextLabelProps {
  BackgroundColor3?: Color3
  BackgroundTransparency?: number
  Position?: UDim2
  Size?: UDim2
  Text?: String
  TextColor3?: Color3
  TextScaled?: boolean
  TextSize?: number
}

export const Textlabel = (props: TextLabelProps) => {
  return <>{props.Text || "Hello world!"}</>
}

export class Color3 {
  constructor() {}

  static fromRGB(r: number, g: number, b: number) {
    return new Color3()
  }
}

export class UDim2 {
  constructor(w: number, h: number, d: number, p: number) {
  }
}

declare global {
  class Color3 {
    constructor()
    static fromRGB(r: number, g: number, b: number): Color3
  }

  class UDim2 {
    constructor(w: number, h: number, d: number, p: number)
  }

  namespace JSX {
    interface IntrinsicElements {
      Textlabel: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
