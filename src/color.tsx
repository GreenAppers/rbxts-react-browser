export class Color3 {
  R: number;
  G: number;
  B: number;

  constructor(r = 0, g = 0, b = 0) {
    this.R = r;
    this.G = g;
    this.B = b;
  }

  toString(): string {
    return `rgb(${this.R}, ${this.G}, ${this.B})`;
  }

  Lerp(goal: Color3, alpha: number): Color3 {
    return new Color3(
      this.R + (goal.R - this.R) * alpha,
      this.G + (goal.G - this.G) * alpha,
      this.B + (goal.B - this.B) * alpha
    );
  }

  static fromRGB(r: number, g: number, b: number): Color3 {
    return new Color3(r, g, b);
  }
}
