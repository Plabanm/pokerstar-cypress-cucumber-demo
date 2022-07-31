## Pokerstar Cypress Cucumber Demo

# Created with: 

- [x] [Cypress v10](https://www.cypress.io/).
- [x] [Cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor).
- [x] [Cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor).
- [x] [Esbuild Bundler](https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples).

## Running the pack

# PreRequisit

- [x] [Node Js](https://nodejs.org/es/download/).

# Steps to install

- Clone the Repo
- Cd to pokerstar-cypress folder on terminal
- Use `npm i` to install all dependecies
- run tests using Test Commands below

# Test Commands

- Use `npm run test` to open UI runner 
    - select `E2E Testing` 
    - select preperfed browser and click on `Start E2E Testing` 
    - click on feature file to select and run
- Use `test:headless` to run All Tests in headless mode in default browser
- Use `test:headless-chrome` to run All Tests in headless mode using chrome browser
- Use `test:betslip` to run all betslip tagged tests in headless mode
- Use `test:betslip-chrome` to run all betslip tagged tests in headless mode using chrome browser
- Use `price-format` to run all price-format tagged tests in headless mode
- Use `price-format-chrome` to run all price-format tagged tests in headless mode using chrome browser
- Use `test:smoke` to run all smoke tagged tests in headless mode
- Use `test:smoke-firefox` to run all smoke tagged tests in headless mode using firefox browser