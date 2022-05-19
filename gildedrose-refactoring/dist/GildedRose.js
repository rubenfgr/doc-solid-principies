"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = void 0;
class GildedRose {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach((item) => {
            item.updateQuality();
        });
    }
}
exports.GildedRose = GildedRose;
