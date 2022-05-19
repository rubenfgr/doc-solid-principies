import { Item } from "./Item";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";
import { ItemTypeEnum } from "./ItemType.enum";

export class ItemSulfuras extends Item {
  constructor(sellIn: ItemSellIn, quality: ItemQuality) {
    super(new ItemName(ItemTypeEnum.ITEM_SULFURAS), sellIn, quality);
  }

  updateQuality(): void {
    // ---
  }
}
