import { CreateUserComand } from "./CreateUserComand";
import { PrismaUserRepository } from "./PrismaUserRepository";
import { TypeORMUserRepository } from "./TypeORMUserRepository";
import { User } from "./User";
import { UserRepository } from "./UserRepository";

const user: User = new User("John");
let repository: UserRepository = new TypeORMUserRepository();
let command: CreateUserComand = new CreateUserComand(repository);
console.log("=================================================");
command.execute(user);

repository = new PrismaUserRepository();
command = new CreateUserComand(repository);
console.log("=================================================");
command.execute(user);
