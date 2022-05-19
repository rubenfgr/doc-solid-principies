"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
class File {
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
exports.File = File;
