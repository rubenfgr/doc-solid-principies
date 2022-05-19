"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalSearcherQuery = void 0;
class AnimalSearcherQuery {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        const animal = this.repository.findById(id);
        if (!animal) {
            throw new Error(`Animal with id ${id} not found`);
        }
        return animal;
    }
}
exports.AnimalSearcherQuery = AnimalSearcherQuery;
