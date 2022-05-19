import { AnimalRepository } from "./AnimalRepository";

export class MikroORMRepository implements AnimalRepository {
  findById(id: string): void {
    console.log("[MikroORMRepository.findById]" + id);
  }
}
