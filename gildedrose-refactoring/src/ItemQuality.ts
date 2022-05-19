import { ItemQualityOutOfRangeException } from "./ItemQualityOutOfRangeException";

export class ItemQuality {
  private MAX_VALUE = 50;
  private MIN_VALUE = 0;

  value: number;

  constructor(value: number) {
    if (value < this.MIN_VALUE || value > this.MAX_VALUE) {
      throw new ItemQualityOutOfRangeException(
        value,
        this.MIN_VALUE,
        this.MAX_VALUE
      );
    }
    this.value = value;
  }

  increase(): ItemQuality {
    if (this.value === this.MAX_VALUE) {
      return this;
    }
    return new ItemQuality(this.value + 1);
  }

  decrease(): ItemQuality {
    if (this.value === this.MIN_VALUE) {
      return this;
    }
    return new ItemQuality(this.value - 1);
  }

  reset(): ItemQuality {
    return new ItemQuality(this.value - this.value);
  }
}
