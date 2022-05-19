export class File {
  private totalLength: number;
  private sentLength: number;

  constructor(totalLength: number, sentLength: number) {
    this.totalLength = totalLength;
    this.sentLength = sentLength;
  }

  getSentLengthPercentage(): number {
    return (this.sentLength * 100) / this.totalLength;
  }
}
