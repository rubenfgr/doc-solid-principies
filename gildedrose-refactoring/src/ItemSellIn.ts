export class ItemSellIn {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  decrease(): ItemSellIn {
    return new ItemSellIn(this.value - 1);
  }

  increase(): ItemSellIn {
    return new ItemSellIn(this.value + 1);
  }

  isLessThan(days: number): boolean {
    return this.value < days;
  }
}
