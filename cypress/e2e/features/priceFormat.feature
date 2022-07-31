@price-format
Feature: Home Page | Price Format

     Changing the odds format

    Background:
       Given I open a pokerstar website
    @somke
    Scenario: select Decimal price format
        When I click on price format button
        And I select Decimal price format
        Then price on bets odds should contain "."

    Scenario: select American price format
        When I click on price format button
        And I select American price format
        Then price on bets odds should contain "+"

    Scenario: select Fraction price format
        When I click on price format button
        And I select Fraction price format
        Then price on bets odds should contain "/"        
   