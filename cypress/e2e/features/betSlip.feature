@betslip
Feature: Bet Slip | Add | Remove

    Adding and removing bets to and from bet slip

    Background:
       Given I open a pokerstar website
    @smoke
    Scenario: add single Bet to bet slip
        When I add a bet to bet slip
        Then the bet counter should say "1"
 
    Scenario: Add 2 Bets to bet slip
        When I add 2 bets to bet slip
        Then the bet counter should say "2"

    Scenario: Remove Single bet from bet slip
        When I add 2 bets to bet slip
        And I remove single bet from bet slip
        Then the bet counter should say "1"  

    Scenario: Remove all bets from bet slip
        When I add 2 bets to bet slip
        And I remove all bets from bet slip
        Then the bet counter should say "0"                 
   