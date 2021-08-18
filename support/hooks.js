var { After, Before, AfterStep } = require('@cucumber/cucumber');
require('dotenv').config();

Before(function (scenario) {
    // console.log(JSON.stringify(scenario));
    console.log("\nTags:", process.env.TAGS);
    console.log(`\nNu kör vi feature testing för "${scenario.pickle.name}"\n`);
});

After(function (scenario) {
    console.log(`\nNu slutar det bästa feature testing för "${scenario.pickle.name}"`);
});