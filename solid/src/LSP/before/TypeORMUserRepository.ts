import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class TypeORMUserRepository implements UserRepository {
  save(user: User): User {
    console.log("User saved to Unity of Work (cache): ", user);
    return user;
  }

  flush(user: User): User {
    console.log("User flushed to Database: ", user);
    return user;
  }
}
