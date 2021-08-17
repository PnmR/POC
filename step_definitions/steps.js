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

Given('I am on page csn.se', function () {
    // Write code here that turns the phrase above into concrete actions

});

When('I click on {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
});

Then('I am directed to Kontaktsidan', function () {
    // Write code here that turns the phrase above into concrete actions
});

