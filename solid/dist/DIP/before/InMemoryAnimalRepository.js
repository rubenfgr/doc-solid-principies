"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryAnimalRepository = void 0;
class InMemoryAnimalRepository {
    constructor() {
        this.animals = [{ id: "1", name: "cat" }];
    }
    findById(id) {
        return this.animals.find((animal) => animal.id === id) || null;
    }
}
exports.InMemoryAnimalRepository = InMemoryAnimalRepository;
