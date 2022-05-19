import { Item } from "./Item";
import { ItemAgedBrie } from "./ItemAgedBrie";
import { ItemBackstagePasses } from "./ItemBackstagePasses";
import { ItemBasic } from "./ItemBasic";
import { ItemName } from "./ItemName";
import { ItemQuality } from "./ItemQuality";
import { ItemSellIn } from "./ItemSellIn";
import { ItemSulfuras } from "./ItemSulfuras";

export abstract class ItemFactory {
  static basedOn(rawName: string, rawSellIn: number, rawQuality: number): Item {
    const name = new ItemName(rawName);
    const sellIn = new ItemSellIn(rawSellIn);
    const quality = new ItemQuality(rawQuality);

    if (name.isAgedBrie()) return new ItemAgedBrie(sellIn, quality);
    if (name.isBackstagePasses())
      return new ItemBackstagePasses(sellIn, quality);
    if (name.isSulfuras()) return new ItemSulfuras(sellIn, quality);
    return new ItemBasic(name, sellIn, quality);
  }
}
