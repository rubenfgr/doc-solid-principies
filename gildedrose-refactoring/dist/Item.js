"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    increaseSellIn() {
        this.sellIn = this.sellIn.increase();
    }
    decreaseSellIn() {
        this.sellIn = this.sellIn.decrease();
    }
    increaseQuality() {
        this.quality = this.quality.increase();
    }
    decreaseQuality() {
        this.quality = this.quality.decrease();
    }
    resetQuality() {
        this.quality = this.quality.reset();
    }
    hasToBeSoldInLessThan(days) {
        return this.sellIn.isLessThan(days);
    }
}
exports.Item = Item;
