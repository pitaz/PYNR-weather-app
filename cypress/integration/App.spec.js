describe("Weather app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/");
  });
  it("loads app", () => {
    cy.contains("Welcome to payoneer test!");
  });
});
