import { InMemoryAnimalRepository } from "./InMemoryAnimalRepository";

export class AnimalSearcherQuery {
  constructor(private repository: InMemoryAnimalRepository) {}

  execute(id: string): void {
    this.repository.findById(id);
  }
}
