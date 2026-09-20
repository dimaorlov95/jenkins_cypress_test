describe('Drink Water UI', () => {

  const url = 'https://dimaorlov95.github.io/web-projects/drink_water/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should fill the scale after selecting 8 glasses', () => {

    // Select all 8 glasses
    cy.get('.cup-small').each(($cup) => {
      cy.wrap($cup).click();
    });

    // Verify the scale is full
    cy.get('.percentage')
      .should('have.css', 'height', '322px');

  });

});