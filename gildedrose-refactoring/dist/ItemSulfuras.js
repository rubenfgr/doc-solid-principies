"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSulfuras = void 0;
const Item_1 = require("./Item");
const ItemName_1 = require("./ItemName");
const ItemType_enum_1 = require("./ItemType.enum");
class ItemSulfuras extends Item_1.Item {
    constructor(sellIn, quality) {
        super(new ItemName_1.ItemName(ItemType_enum_1.ItemTypeEnum.ITEM_SULFURAS), sellIn, quality);
    }
    updateQuality() {
        // ---
    }
}
exports.ItemSulfuras = ItemSulfuras;
