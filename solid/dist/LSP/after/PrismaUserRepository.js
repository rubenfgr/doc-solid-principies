"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
class PrismaUserRepository {
    save(user) {
        console.log("User saved to database: ", user);
        return user;
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
