"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemName = void 0;
const ItemType_enum_1 = require("./ItemType.enum");
class ItemName {
    constructor(value) {
        this.value = value;
    }
    isAgedBrie() {
        return this.value === ItemType_enum_1.ItemTypeEnum.ITEM_AGED_BRIE;
    }
    isBackstagePasses() {
        return this.value === ItemType_enum_1.ItemTypeEnum.ITEM_BACKSTAGE_PASSES;
    }
    isSulfuras() {
        return this.value === ItemType_enum_1.ItemTypeEnum.ITEM_SULFURAS;
    }
    equals(other) {
        return Object.is(this, other);
    }
}
exports.ItemName = ItemName;
