"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const Measurable_1 = require("./Measurable");
class File extends Measurable_1.Measurable {
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
exports.File = File;
