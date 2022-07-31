import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const homePage = require("../../pages/HomePage");
  
  
  Given("I open a pokerstar website", () => {
    cy.visit("/");
    homePage.clickOnAcceptCookiesButton();
  });
  When("I click on price format button", () => {
    homePage.clickOnCurrencyFormat();
  });
  When("I select Decimal price format", () => {
    homePage.clickOnDecimalOption();
  });
  When("I select Fraction price format", () => {
    homePage.clickOnFractionOption();
  });
  When("I select American price format", () => {
    homePage.clickOnAmericanOption();
  });
  Then("price on bets odds should contain {string}", (identifier) => {
    homePage.getBetOdds(identifier);
  });