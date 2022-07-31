class BetSlipPage {
    elements = {
      removebet: () => cy.get(".remove"),
      removeAll: () => cy.get("a[title='Remove All']"),
      betCount: () => cy.get(".singleBetsCounter"),
      confirmRemove: () => cy.contains("Remove")
    };
  
    removeSingleBet() {
      this.elements.removebet().first().click();
    }
  
    remnoveAllbets() {
      this.elements.removeAll().click();
      this.elements.confirmRemove().click();
    }

    getBetCount(count){
        this.elements.betCount().then(($betCount) =>{
            expect(parseInt($betCount.text().replace(/\D/g, ""))).to.eq(parseInt(count))
        })
    }
  }
  
  module.exports = new BetSlipPage();