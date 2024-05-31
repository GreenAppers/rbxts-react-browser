export class Font {
  constructor(name?: string, weight?: Enum.FontWeight) {}
  static fromEnum(font: Enum.Font): Font {
    return new Font(font.toString());
  }
}
