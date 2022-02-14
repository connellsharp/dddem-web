describe('User Login Page', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('has no detectable a11y violations on load', () => {
    cy.pa11y();
  });
});
