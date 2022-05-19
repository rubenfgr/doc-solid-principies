"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Measurable = void 0;
class Measurable {
    getSentLengthPercentage() {
        return (this.getSentLength() * 100) / this.getTotalLength();
    }
}
exports.Measurable = Measurable;
