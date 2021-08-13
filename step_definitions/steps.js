const { Given, When, Then } = require("@cucumber/cucumber");

Given('There is a context', function () {
    console.log("Context");
});

When('It triggers', function () {
    console.log("Trigger");
});

Then('There is a consequence', function () {
    console.log("Consequence");
    console.log(this.sharedVariable);
});