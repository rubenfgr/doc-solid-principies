"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserComand = void 0;
class CreateUserComand {
    constructor(repository) {
        this.repository = repository;
    }
    execute(user) {
        this.repository.save(user);
        return this.repository.flush(user);
    }
}
exports.CreateUserComand = CreateUserComand;
