
export class math {
  static huge = Number.MAX_VALUE;
  static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
  static max(x: number, y: number): number {
    return Math.max(x, y);
  }
  static min(x: number, y: number): number {
    return Math.min(x, y);
  }
  static sin(x: number): number {
    return Math.sin(x);
  }
  static cos(x: number): number {
    return Math.cos(x);
  }
  static tan(x: number): number {
    return Math.tan(x);
  }
  static asin(x: number): number {
    return Math.asin(x);
  }
  static acos(x: number): number {
    return Math.acos(x);
  }
  static atan(x: number): number {
    return Math.atan(x);
  }
  static atan2(y: number, x: number): number {
    return Math.atan2(y, x);
  }
  static sqrt(x: number): number {
    return Math.sqrt(x);
  }
  static exp(x: number): number {
    return Math.exp(x);
  }
  static log(x: number): number {
    return Math.log(x);
  }
  static abs(x: number): number {
    return Math.abs(x);
  }
  static round(x: number): number {
    return Math.round(x);
  }
  static sign(x: number): -1 | 0 | 1 {
    return x < 0 ? -1 : x > 0 ? 1 : 0;
  }
}
