class HomePage {
    elements = {
      acceptCookiesButton: () => cy.get("#onetrust-accept-btn-handler"),
      currencyFormat: () => cy.get(".currentFormat"),
      decimalOption: () => cy.get("#Decimal"),
      fractionOption: () => cy.get("#Fraction"),
      americanOption: () => cy.get("#American"),
      betOdds: () => cy.get(".button__bet__odds"),
      betSelection: () => cy.get(".selectionBlock")
    };
  
    clickOnAcceptCookiesButton() {
      this.elements.acceptCookiesButton().click();
    }
  
    clickOnCurrencyFormat() {
      this.elements.currencyFormat().click();
    }
  
    clickOnDecimalOption() { 
      this.elements.decimalOption().click();
    }
    clickOnFractionOption() { 
      this.elements.fractionOption().click();
    }
    clickOnAmericanOption() { 
      this.elements.americanOption().click();
    }
    getBetOdds(decimalPoint){
        this.elements.betOdds().first().invoke("text").should("contain", decimalPoint);
    }
    SelectSingleBet(){
      this.elements.betSelection().first().click();
    }
    SelectDoubeleBet(){
      this.elements.betSelection().first().click();
      this.elements.betSelection().eq(1).click()
    }
  }
  
  module.exports = new HomePage();