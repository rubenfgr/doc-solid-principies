import { AnimalSearcherQuery } from "./AnimalSearcherQuery";
import { InMemoryAnimalRepository } from "./InMemoryAnimalRepository";

const repository = new InMemoryAnimalRepository();
const query = new AnimalSearcherQuery(repository);
query.execute("1");
