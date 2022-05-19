import { Measurable } from "./Measurable";

export class Song implements Measurable {
  private totalLength: number;
  private sentLength: number;

  constructor(totalLength: number, sentLength: number) {
    this.totalLength = totalLength;
    this.sentLength = sentLength;
  }

  getSentLength(): number {
    return this.sentLength;
  }

  getTotalLength(): number {
    return this.totalLength;
  }
}
