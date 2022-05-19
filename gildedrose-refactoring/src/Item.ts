import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export abstract class Item {
  name: ItemName;
  sellIn: ItemSellIn;
  quality: ItemQuality;

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  increaseSellIn(): void {
    this.sellIn = this.sellIn.increase();
  }

  decreaseSellIn(): void {
    this.sellIn = this.sellIn.decrease();
  }

  increaseQuality(): void {
    this.quality = this.quality.increase();
  }

  decreaseQuality(): void {
    this.quality = this.quality.decrease();
  }

  resetQuality(): void {
    this.quality = this.quality.reset();
  }

  hasToBeSoldInLessThan(days: number): boolean {
    return this.sellIn.isLessThan(days);
  }

  abstract updateQuality(): void;
}
