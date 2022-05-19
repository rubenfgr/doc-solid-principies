"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
class Song {
    constructor(totalLength, sentLength) {
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
