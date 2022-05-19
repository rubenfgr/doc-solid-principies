"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const Measurable_1 = require("./Measurable");
class Song extends Measurable_1.Measurable {
    constructor(totalLength, sentLength) {
        super();
        this.totalLength = totalLength;
        this.sentLength = sentLength;
    }
    getSentLength() {
        return this.sentLength;
    }
    getTotalLength() {
        return this.totalLength;
    }
}
exports.Song = Song;
