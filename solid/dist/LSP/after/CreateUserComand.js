"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserComand = void 0;
class CreateUserComand {
    constructor(repository) {
        this.repository = repository;
    }
    execute(user) {
        return this.repository.save(user);
    }
}
exports.CreateUserComand = CreateUserComand;
