"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemQualityOutOfRangeException = void 0;
class ItemQualityOutOfRangeException extends Error {
    constructor(rawQuality, min, max) {
        super(`Item quality ${rawQuality} is out of range [${min}, ${max}]`);
    }
}
exports.ItemQualityOutOfRangeException = ItemQualityOutOfRangeException;
