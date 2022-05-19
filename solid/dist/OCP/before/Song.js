"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
class Song {
    constructor(totalLength, sentLength) {
        this.totalLength = totalLength;
        this.sentLength = sentLength;
    }
    getSentLengthPercentage() {
        return (this.sentLength * 100) / this.totalLength;
    }
}
exports.Song = Song;
