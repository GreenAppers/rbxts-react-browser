import { Vector3 } from "./vector";

export class CFrame {
  Position: Vector3;
  LookVector: Vector3;
  RightVector: Vector3;
  UpVector: Vector3;

  constructor(
    x: number,
    y: number,
    z: number,
    R00: number,
    R01: number,
    R02: number,
    R10: number,
    R11: number,
    R12: number,
    R20: number,
    R21: number,
    R22: number
  ) {
    this.Position = new Vector3(x, y, z);
    this.RightVector = new Vector3(R00, R10, R20);
    this.UpVector = new Vector3(R01, R11, R21);
    this.LookVector = new Vector3(-R02, -R12, -R22);
  }
}
