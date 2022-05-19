"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
class App {
    constructor(name) {
        this.name = "";
        this.name = name;
    }
    main() {
        return `Hello ${this.name} from NodeJS typescript basic skeleton`;
    }
}
exports.App = App;
new App("RubenFGR").main();
