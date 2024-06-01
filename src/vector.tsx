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

export class Vector3 {
  X: number;
  Y: number;
  Z: number;

  get Magnitude() {
    return math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
  }

  constructor(x: number, y: number, z: number) {
    this.X = x;
    this.Y = y;
    this.Z = z;
  }
}