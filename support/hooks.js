var { After, Before, BeforeAll } = require('@cucumber/cucumber');

Before(function (scenario) {
    // console.log(JSON.stringify(scenario));
    console.log(`\nTags: "${scenario.gherkinDocument.feature.tags[0].name}"`);
    console.log(`\nNu kör vi feature testing för "${scenario.gherkinDocument.feature.children[0].scenario.name}"\n`);
});

After(function (scenario) {
    console.log(`\nNu slutar det bästa feature testing för "${scenario.gherkinDocument.feature.children[0].scenario.name}"`);
});