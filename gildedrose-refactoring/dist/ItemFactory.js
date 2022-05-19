"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFactory = void 0;
const ItemAgedBrie_1 = require("./ItemAgedBrie");
const ItemBackstagePasses_1 = require("./ItemBackstagePasses");
const ItemBasic_1 = require("./ItemBasic");
const ItemSulfuras_1 = require("./ItemSulfuras");
const ItemType_enum_1 = require("./ItemType.enum");
class ItemFactory {
    basedOn(rawName, rawSellIn, rawQuality) {
        switch (rawName) {
            case ItemType_enum_1.ItemTypeEnum.ITEM_AGED_BRIE:
                return new ItemAgedBrie_1.ItemAgedBrie(rawSellIn, rawQuality);
            case ItemType_enum_1.ItemTypeEnum.ITEM_BACKSTAGE_PASSES:
                return new ItemBackstagePasses_1.ItemBackstagePasses(rawSellIn, rawQuality);
            case ItemType_enum_1.ItemTypeEnum.ITEM_SULFURAS:
                return new ItemSulfuras_1.ItemSulfuras(rawSellIn, rawQuality);
            default:
                return new ItemBasic_1.ItemBasic(rawName, rawSellIn, rawQuality);
        }
    }
}
exports.ItemFactory = ItemFactory;
