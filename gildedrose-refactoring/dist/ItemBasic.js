"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemBasic = void 0;
const Item_1 = require("./Item");
class ItemBasic extends Item_1.Item {
    constructor(item) {
        super(item.name, item.sellIn, item.quality);
    }
    updateQuality() {
        this.decreaseQuality();
        this.decreaseSellIn();
        if (this.hasToBeSoldInLessThan(0)) {
            this.decreaseQuality();
        }
    }
}
exports.ItemBasic = ItemBasic;
