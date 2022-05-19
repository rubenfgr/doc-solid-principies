export abstract class Measurable {
  abstract getTotalLength(): number;
  abstract getSentLength(): number;

  getSentLengthPercentage(): number {
    return (this.getSentLength() * 100) / this.getTotalLength();
  }
}
