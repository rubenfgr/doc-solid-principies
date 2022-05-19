"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAgedBrie = void 0;
const Item_1 = require("./Item");
const ItemName_1 = require("./ItemName");
class ItemAgedBrie extends Item_1.Item {
    constructor(sellIn, quality) {
        super(new ItemName_1.ItemName("ItemTypeEnum.ITEM_AGED_BRIE"), sellIn, quality);
    }
    updateQuality() {
        this.increaseQuality();
        this.decreaseSellIn();
        if (this.hasToBeSoldInLessThan(0)) {
            this.increaseQuality();
        }
    }
}
exports.ItemAgedBrie = ItemAgedBrie;
