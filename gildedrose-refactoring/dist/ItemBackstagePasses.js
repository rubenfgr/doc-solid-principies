"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemBackstagePasses = void 0;
const Item_1 = require("./Item");
const ItemName_1 = require("./ItemName");
const ItemType_enum_1 = require("./ItemType.enum");
class ItemBackstagePasses extends Item_1.Item {
    constructor(sellIn, quality) {
        super(new ItemName_1.ItemName(ItemType_enum_1.ItemTypeEnum.ITEM_BACKSTAGE_PASSES), sellIn, quality);
    }
    updateQuality() {
        this.increaseQuality();
        this.decreaseSellIn();
        if (this.hasToBeSoldInLessThan(11)) {
            this.increaseQuality();
        }
        if (this.hasToBeSoldInLessThan(6)) {
            this.increaseQuality();
        }
        if (this.hasToBeSoldInLessThan(0)) {
            this.resetQuality();
        }
    }
}
exports.ItemBackstagePasses = ItemBackstagePasses;
