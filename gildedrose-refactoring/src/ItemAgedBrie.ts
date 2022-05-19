import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";

export class ItemAgedBrie extends Item {
  constructor(sellIn: ItemSellIn, quality: ItemQuality) {
    super(new ItemName("ItemTypeEnum.ITEM_AGED_BRIE"), sellIn, quality);
  }

  updateQuality(): void {
    this.increaseQuality();
    this.decreaseSellIn();
    if (this.hasToBeSoldInLessThan(0)) {
      this.increaseQuality();
    }
  }
}
