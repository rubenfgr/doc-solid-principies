import { AnimalSearcherQuery } from "./AnimalSearcherQuery";
import { InMemoryAnimalRepository } from "./InMemoryAnimalRepository";
import { MikroORMRepository } from "./MikroORMRepository";

const inMemoryAnimalRepository = new InMemoryAnimalRepository();
let query = new AnimalSearcherQuery(inMemoryAnimalRepository);
query.execute("1");

const mikroORMRepository = new MikroORMRepository();
query = new AnimalSearcherQuery(mikroORMRepository);
query.execute("2");
