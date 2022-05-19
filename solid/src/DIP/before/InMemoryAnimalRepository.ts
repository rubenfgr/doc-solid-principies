import { AnimalRepository } from "./AnimalRepository";

export class InMemoryAnimalRepository implements AnimalRepository {
  findById(id: string): void {
    console.log("[InMemoryAnimalRepository.findById]" + id);
  }
}
