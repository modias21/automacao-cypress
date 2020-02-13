describe("Teste Quadrado", () => {

    beforeEach(function(){
        cy.visit("/");
    })

    it("Clicar no Quadrado", () => {
      const pointerEvent = {
        force: true,
        pointerType: 'touch',
      };
      
      cy.get('#quadrado')
      .trigger('pointerdown', 'topLeft', pointerEvent)
      .wait(1000)
      .trigger('pointerup', 'topLeft', pointerEvent)
      .get('.square.expand').should('be.visible')
    });
 });