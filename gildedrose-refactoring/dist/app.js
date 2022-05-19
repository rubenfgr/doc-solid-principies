"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GildedRose_1 = require("./GildedRose");
const ItemAgedBrie_1 = require("./ItemAgedBrie");
const ItemBackstagePasses_1 = require("./ItemBackstagePasses");
const ItemBasic_1 = require("./ItemBasic");
const ItemSulfuras_1 = require("./ItemSulfuras");
const items = [
    new ItemBasic_1.ItemBasic("+5 Dexterity Vest", 10, 20),
    new ItemAgedBrie_1.ItemAgedBrie(2, 0),
    new ItemBasic_1.ItemBasic("Elixir of the Mongoose", 5, 7),
    new ItemSulfuras_1.ItemSulfuras(0, 80),
    new ItemSulfuras_1.ItemSulfuras(-1, 80),
    new ItemBackstagePasses_1.ItemBackstagePasses(15, 20),
    new ItemBackstagePasses_1.ItemBackstagePasses(10, 49),
    new ItemBackstagePasses_1.ItemBackstagePasses(5, 49),
    // this conjured item does not work properly yet
    new ItemBasic_1.ItemBasic("Conjured Mana Cake", 3, 6),
];
const gildedRose = new GildedRose_1.GildedRose(items);
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
