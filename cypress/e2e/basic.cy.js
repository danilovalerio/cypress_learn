describe("Cypress Basic", () => {
  it("Should visit a page asset title", () => {
    cy.visit("https://www.uol.com.br/");
    //const title = cy.title();
    //console.log(title);

    //através do should vamos fazer as assertivas por conta das promisses
    cy.title().should("be.equal", "UOL - Seu universo online");
    cy.title().should("contain", "UOL");

    //ou poderíamos fazer o seguinte
    cy.title()
      .should("be.equal", "UOL - Seu universo online")
      .should("contain", "UOL");

    //mudando a legibilidade
    cy.title()
      .should("be.equal", "UOL - Seu universo online")
      .and("contain", "UOL");

    //TODO imprimir title no console
    //TODO escrever o log em um campo de text
  });
});
