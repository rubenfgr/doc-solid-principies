import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class TypeORMUserRepository implements UserRepository {
  save(user: User): User {
    console.log(
      "User saved to Unity of Work (cache) and flushed to Database: ",
      user
    );
    return user;
  }
}
