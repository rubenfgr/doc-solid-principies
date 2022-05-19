import { TypeORMUserRepository } from "./TypeORMUserRepository";
import { User } from "./User";

export class CreateUserComand {
  constructor(private repository: TypeORMUserRepository) {}

  execute(user: User): User {
    this.repository.save(user);
    return this.repository.flush(user);
  }
}
