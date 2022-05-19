export class App {
  private name = "";

  constructor(name: string) {
    this.name = name;
  }

  main(): string {
    return `Hello ${this.name} from NodeJS typescript basic skeleton`;
  }
}

console.log(new App("RubenFGR").main());
