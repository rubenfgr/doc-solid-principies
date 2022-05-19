import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";
import { ItemTypeEnum } from "./ItemType.enum";

export class ItemBackstagePasses extends Item {
  constructor(sellIn: ItemSellIn, quality: ItemQuality) {
    super(new ItemName(ItemTypeEnum.ITEM_BACKSTAGE_PASSES), sellIn, quality);
  }

  updateQuality(): void {
    this.decreaseSellIn();
    this.increaseQuality();
    if (this.hasToBeSoldInLessThan(10)) {
      this.increaseQuality();
    }
    if (this.hasToBeSoldInLessThan(5)) {
      this.increaseQuality();
    }
    if (this.hasToBeSoldInLessThan(0)) {
      this.resetQuality();
    }
  }
}
