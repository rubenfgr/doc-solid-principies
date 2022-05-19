import { GildedRose } from "./GildedRose";
import { ItemFactory } from "./ItemFactory";
import { ItemTypeEnum } from "./ItemType.enum";

const items = [
  ItemFactory.basedOn("+5 Dexterity Vest", 10, 20),
  ItemFactory.basedOn(ItemTypeEnum.ITEM_AGED_BRIE, 2, 0),
  ItemFactory.basedOn("Elixir of the Mongoose", 5, 7),
  ItemFactory.basedOn(ItemTypeEnum.ITEM_SULFURAS, 0, 49),
  ItemFactory.basedOn(ItemTypeEnum.ITEM_SULFURAS, -1, 49),
  ItemFactory.basedOn(ItemTypeEnum.ITEM_BACKSTAGE_PASSES, 15, 20),
  ItemFactory.basedOn(ItemTypeEnum.ITEM_BACKSTAGE_PASSES, 10, 49),
  ItemFactory.basedOn(ItemTypeEnum.ITEM_BACKSTAGE_PASSES, 5, 49),
  // this conjured item does not work properly yet
  ItemFactory.basedOn("Conjured Mana Cake", 3, 6),
];

const gildedRose = new GildedRose(items);

let days = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach((element) => {
    console.log(element.name + " " + element.sellIn + " " + element.quality);
  });
  console.log();
  gildedRose.updateQuality();
}
