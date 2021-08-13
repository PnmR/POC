var { After, Before } = require('@cucumber/cucumber');

Before(function (scenario) {
    console.log(`\nBefore each Scenario: ${scenario.gherkinDocument.feature.children[0].scenario.name}\n`);
});

After(function (scenario) {
    console.log(`\nAfter each Scenario: ${scenario.gherkinDocument.feature.children[0].scenario.name}`);
});