"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
        this.id = Math.random().toString();
    }
}
exports.Animal = Animal;
