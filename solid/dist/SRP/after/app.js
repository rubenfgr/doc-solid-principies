"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chef_1 = require("./Chef");
const Potato_1 = require("./Potato");
const chef = new Chef_1.Chef();
const potato = new Potato_1.Potato("Red", "Deluxe", 10);
chef.cook([potato.getDescription()]);
