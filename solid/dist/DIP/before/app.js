"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnimalSearcherQuery_1 = require("./AnimalSearcherQuery");
const InMemoryAnimalRepository_1 = require("./InMemoryAnimalRepository");
const repository = new InMemoryAnimalRepository_1.InMemoryAnimalRepository();
const query = new AnimalSearcherQuery_1.AnimalSearcherQuery(repository);
const result = query.execute("1");
console.log(result);
