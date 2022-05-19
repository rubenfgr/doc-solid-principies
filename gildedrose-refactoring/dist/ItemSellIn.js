"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSellIn = void 0;
class ItemSellIn {
    constructor(value) {
        this.value = value;
    }
    decrease() {
        return new ItemSellIn(this.value - 1);
    }
    increase() {
        return new ItemSellIn(this.value + 1);
    }
    isLessThan(days) {
        return this.value < days;
    }
    equals(other) {
        return Object.is(this, other);
    }
}
exports.ItemSellIn = ItemSellIn;
