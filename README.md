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

- Open Terminal
- Go to the folder you want to clone the project eg: `cd downloads`
- Clone the Repo `git clone https://github.com/Plabanm/pokerstar-cypress-cucumber-demo.git`
- Go to project folder `cd pokerstar-cypress-cucumber-demo` folder
- Use `npm i` to install all dependecies
- run tests using Test Commands below

# Test Commands

- Use `npm run test` to open UI runner 
    - select `E2E Testing` 
    - select preperfed browser and click on `Start E2E Testing` 
    - click on feature file to select and run
- Use `npm run test:headless` to run All Tests in headless mode in default browser
- Use `npm run test:headless-chrome` to run All Tests in headless mode using chrome browser
- Use `npm run test:betslip` to run all betslip tagged tests in headless mode
- Use `npm run test:betslip-chrome` to run all betslip tagged tests in headless mode using chrome browser
- Use `npm run test:price-format` to run all price-format tagged tests in headless mode
- Use `npm run test:price-format-chrome` to run all price-format tagged tests in headless mode using chrome browser
- Use `npm run test:smoke` to run all smoke tagged tests in headless mode
- Use `npm run test:smoke-firefox` to run all smoke tagged tests in headless mode using firefox browser