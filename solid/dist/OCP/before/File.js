"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
class File {
    constructor(totalLength, sentLength) {
        this.totalLength = totalLength;
        this.sentLength = sentLength;
    }
    getSentLengthPercentage() {
        return (this.sentLength * 100) / this.totalLength;
    }
}
exports.File = File;
