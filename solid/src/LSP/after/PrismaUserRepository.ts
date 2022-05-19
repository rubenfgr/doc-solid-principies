import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class PrismaUserRepository implements UserRepository {
  save(user: User): User {
    console.log("User saved to database: ", user);
    return user;
  }
}
