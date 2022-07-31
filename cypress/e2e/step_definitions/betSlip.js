import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const homePage = require("../../pages/HomePage");
  const betSlipPage = require("../../pages/BetSlipPage")
  

  When("I add a bet to bet slip", () =>{
    homePage.SelectSingleBet();
  })

  When("I add 2 bets to bet slip", () =>{
    homePage.SelectDoubeleBet();
  })

  And("I remove single bet from bet slip", () =>{
    betSlipPage.removeSingleBet();
  })

  And("I remove all bets from bet slip", () =>{
    betSlipPage.remnoveAllbets();
  })

  Then("the bet counter should say {string}", (betCount) =>{
    betSlipPage.getBetCount(betCount);
  })