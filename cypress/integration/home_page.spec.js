describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('React Hooks Examples');
  });

  it('increments counter', () => {
    cy.visit('/');
    cy.contains('useState Example').parent().within(() => {
      cy.contains('Count: 0');
      cy.contains('Increment').click();
      cy.contains('Count: 1');
    });
  });
});

