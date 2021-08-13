# Cucumber-js-skeleton


## Getting Started

## Built With

* [cucumberjs](https://github.com/cucumber/cucumber-js) - Cucumber framework for javascript

### Installing

- yarn install

## Running the tests

- yarn run-cucumber : run tests and generate the test reports

## Directory structure

- Cucumber-js-skeleton :  
  * features
    **<feature_title_in_snake_case>.feature**
  * step-definitions : Here are all the step definitions for the features.
  * support :
    * hooks.js : Here are the hooks of the cucumber framework.
    * world.js : Here are the variable declared that shares state between steps of the a scenario. These variables can be exposed by "this"
  * test-reports : All kinds of test reports are collected here.
  * package.json : Config file for npm/yarn
  * .gitignore :


## Authors

* **Poonam Rai** - *Initial work* -


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details