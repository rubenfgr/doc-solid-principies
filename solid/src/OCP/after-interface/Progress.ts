import { Measurable } from "./Measurable";

export class Progress {
  getSentLengthPercentage(measurable: Measurable): number {
    return (measurable.getSentLength() * 100) / measurable.getTotalLength();
  }
}
