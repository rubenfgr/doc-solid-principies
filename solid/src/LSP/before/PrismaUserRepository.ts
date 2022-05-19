import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class PrismaUserRepository implements UserRepository {
  save(user: User): User {
    console.log("User saved to database: ", user);
    return user;
  }

  flush(user: User): User {
    // ISP violation, esta obligando al repo de prisma a utilizar flush para persistir en la base de datos
    return user;
  }
}
