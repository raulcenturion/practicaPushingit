import { LoginPage } from "../../support/pages/loginPages";
import { TodoListPage } from "../../support/pages/todoListPage";

describe('Actividad complementaria 6', () => { 
  const todoListPage = new TodoListPage();
  const loginPage = new LoginPage();
    
     beforeEach("Actividad complementaria 6", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario('pushingit');
        loginPage.escribirContraseña('123456!');
        loginPage.enviarFormulario();
        cy.get('#todolistlink').click();
    });

  	it("deberia verificar que los botones existen", () =>{
        todoListPage.botonAll().should('exist');
        todoListPage.botonCompleted().should('exist'); 
        todoListPage.botonActive().should('exist'); 
        todoListPage.botonRemoveAll().should('exist');
          
    });
 });