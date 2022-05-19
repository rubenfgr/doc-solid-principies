"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemQuality = void 0;
const ItemQualityOutOfRangeException_1 = require("./ItemQualityOutOfRangeException");
class ItemQuality {
    constructor(value) {
        this.MAX_VALUE = 50;
        this.MIN_VALUE = 0;
        if (value < this.MIN_VALUE || value > this.MAX_VALUE) {
            throw new ItemQualityOutOfRangeException_1.ItemQualityOutOfRangeException(value, this.MIN_VALUE, this.MAX_VALUE);
        }
        this.value = value;
    }
    increase() {
        if (this.value === this.MAX_VALUE) {
            return this;
        }
        return new ItemQuality(this.value + 1);
    }
    decrease() {
        if (this.value === this.MIN_VALUE) {
            return this;
        }
        return new ItemQuality(this.value - 1);
    }
    reset() {
        return new ItemQuality(this.value - this.value);
    }
}
exports.ItemQuality = ItemQuality;
