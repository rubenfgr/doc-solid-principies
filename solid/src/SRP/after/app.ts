import { Chef } from "./Chef";
import { Potato } from "./Potato";

const chef: Chef = new Chef();
const potato: Potato = new Potato("Red", "Deluxe", 10);
chef.cook([potato.getDescription()]);
