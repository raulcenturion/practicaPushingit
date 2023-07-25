/// <reference types="cypress" />
describe("Actividad complementaria", () => {
  const numeroRamdom = Math.floor(Math.random() * 1000);
  it("Actividad complementeria 1", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numeroRamdom}`);
    cy.get("#user").clear();
    cy.get("#user").type("pushingit" + numeroRamdom);
    cy.get("#pass").type("123456!", { log: false });
    cy.get("[value='Male']").check({ force: true });
    cy.get("#day").select("1");
    cy.get("#month").select("June");
    cy.get("#year").select(90);
    cy.get("#submitForm").click();
    cy.get("#todolistlink");

    //crear un test que permita registrarse en la pagina!
    //Recorda usar npx cypress open para abrir la interfaz de usuario
    //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female //Other
  });
});
