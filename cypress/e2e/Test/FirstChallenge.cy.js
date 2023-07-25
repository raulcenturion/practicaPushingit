/// <reference types="cypress" />
describe("Primer desafío", () => {
  const numeroRamdom = Math.floor(Math.random() * 1000);
  it("Primer desafío", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get('#user').type(`pushingit${numeroRamdom}`);
    cy.get("label")
      .siblings("input#pass")
      .type('123456!');
    cy.get("fieldset").find("[value='Male']").check({ force: true });
    cy.get("#day").select("8");
    cy.get("option").parent('[name="month"]').select("August", { force: true });
    cy.get('[class="chakra-select__wrapper css-1llkhy0"]')
      .children('[name="year"]')
      .select("1987");
    cy.get("#submitForm").click();
    cy.get("#todolistlink").contains('To Do List').click();
    cy.get('#task').type('Tarea 1');
    cy.get('#sendTask').click();
    cy.get('[class="chakra-text css-8atqhb"]').contains('Tarea 1').click();


    //crear un test que permita registrarse en la pagina!
    //Recorda usar npx cypress open para abrir la interfaz de usuario
    //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female //Other
  });
});
