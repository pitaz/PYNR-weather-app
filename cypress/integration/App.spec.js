describe("Weather app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/");
  });
  it("loads app", () => {
    cy.get('#unit-celsius').contains('Celsius')
    cy.get('#unit-fahrenheit').contains('Fahrenheit')
  });
});
