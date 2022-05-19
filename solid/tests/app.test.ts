import { App } from "../src/app";

describe("App", () => {
  it("can be instantiated without throwing errors", () => {
    const randomCodelyberInstantiator = () => {
      new App("RubenFGR");
    };

    expect(randomCodelyberInstantiator).not.toThrow(TypeError);
  });

  it("main", () => {
    const name = 'RubenFGR';
    const randomCodelyber = new App(name);

    const expectedGreeting = `Hello ${name} from NodeJS typescript basic skeleton`;

    expect(randomCodelyber.main()).toEqual(expectedGreeting);
  });
});
