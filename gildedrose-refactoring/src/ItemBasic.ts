import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export class ItemBasic extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
  }

  updateQuality(): void {
    this.decreaseQuality();
    this.decreaseSellIn();
    if (this.hasToBeSoldInLessThan(0)) {
      this.decreaseQuality();
    }
  }
}
