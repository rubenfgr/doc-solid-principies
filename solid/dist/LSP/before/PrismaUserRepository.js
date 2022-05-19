"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
class PrismaUserRepository {
    save(user) {
        console.log("User saved to database: ", user);
        return user;
    }
    flush(user) {
        // ISP violation, esta obligando al repo de prisma a utilizar flush para persistir en la base de datos
        return user;
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
