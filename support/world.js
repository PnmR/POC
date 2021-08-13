const { setWorldConstructor } = require("@cucumber/cucumber");

class CustomWorld {
    constructor() {
        this.sharedVariable = "\n****************\nThis is the first shared variable!!!";
    }
}

setWorldConstructor(CustomWorld);