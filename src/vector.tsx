export class Vector2 {
  X: number;
  Y: number;

  get Magnitude() {
    return math.sqrt(this.X * this.X + this.Y * this.Y);
  }

  constructor(x: number, y: number) {
    this.X = x;
    this.Y = y;
  }
}
