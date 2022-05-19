"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potato = void 0;
class Potato {
    constructor(name, category, quality) {
        this.name = name;
        this.category = category;
        this.quality = quality;
    }
    cook() {
        console.log(`${this.name} potato [${this.category}, ${this.quality}]`);
    }
}
exports.Potato = Potato;
