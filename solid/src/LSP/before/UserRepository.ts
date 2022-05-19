import { User } from "./User";

export interface UserRepository {
  save(user: User): User;
  flush(user: User): User;
}
