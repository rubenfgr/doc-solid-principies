import { User } from "./User";

/**
 * Eliminando el flush perdemos el unity of work de TypeORM pero cumplimos ISP y LSP
 */
export interface UserRepository {
  save(user: User): User;
}
