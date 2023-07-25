import { LoginPage } from "../../support/pages/loginPages";
import { TodoListPage } from "../../support/pages/todoListPage";

describe('Actividad complementaria 6', () => { 
  const todoListPage = new TodoListPage();
  const loginPage = new LoginPage();
    
     beforeEach("Actividad complementaria 6", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario().type('pushingit'); // utilizar la clase loginPage para ingresar el usuario
        loginPage.escribirContraseña().type('123456!'); // utilizar la clase loginPage para ingresar  la contraseña
        loginPage.enviarFormulario().click(); // utilizar la clase loginPage hacer click en 'Log in'
        cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
        cy.get('#todolistlink').click();
    });

  	it("deberia verificar que los botones existen", () =>{
        todoListPage.validarAll.should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        todoListPage.validarCompleted.should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        todoListPage.validarActive.should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        todoListPage.validarRemoveAll.should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
    });
 });