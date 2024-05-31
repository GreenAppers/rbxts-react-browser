export class UDim {
  Scale: number;
  Offset: number;

  constructor(s: number, o: number) {
    this.Scale = s;
    this.Offset = o;
  }

  Lerp(goal: UDim, alpha: number): UDim {
    return new UDim(
      this.Scale + (goal.Scale - this.Scale) * alpha,
      this.Offset + (goal.Offset - this.Offset) * alpha
    );
  }
}

export class UDim2 {
  X: UDim;
  Y: UDim;

  constructor(xs: number, xo: number, ys: number, yo: number) {
    this.X = new UDim(xs, xo);
    this.Y = new UDim(ys, yo);
  }

  Lerp(goal: UDim2, alpha: number): UDim2 {
    const lx = this.X.Lerp(goal.X, alpha);
    const ly = this.Y.Lerp(goal.Y, alpha);
    return new UDim2(lx.Scale, lx.Offset, ly.Scale, ly.Offset);
  }
}
