"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMUserRepository = void 0;
class TypeORMUserRepository {
    save(user) {
        console.log("User saved to Unity of Work (cache) and flushed to Database: ", user);
        return user;
    }
}
exports.TypeORMUserRepository = TypeORMUserRepository;
