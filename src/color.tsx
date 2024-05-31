export class Color3 {
  R: number;
  G: number;
  B: number;

  constructor(r: number, g: number, b: number) {
    this.R = r;
    this.G = g;
    this.B = b;
  }

  toString(): string {
    return `rgb(${this.R}, ${this.G}, ${this.B})`;
  }

  static fromRGB(r: number, g: number, b: number): Color3 {
    return new Color3(r, g, b);
  }
}

