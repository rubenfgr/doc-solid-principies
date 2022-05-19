import { AnimalRepository } from "./AnimalRepository";

export class AnimalSearcherQuery {
  constructor(private repository: AnimalRepository) {}

  execute(id: string): void {
    this.repository.findById(id);
  }
}
