"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
class Progress {
    getSentLengthPercentage(measurable) {
        return (measurable.getSentLength() * 100) / measurable.getTotalLength();
    }
}
exports.Progress = Progress;
