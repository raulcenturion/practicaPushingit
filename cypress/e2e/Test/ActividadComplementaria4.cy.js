//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found
//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    //inicializa el fixture
    let datosFixture;

    before('Before', () => {
        cy.fixture('testFour').then((data) => {
            datosFixture = data;
        })
    })

    beforeEach('Before each', () => {
        // visitar la pagina
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
    });
    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datosFixture.usuario.user);
        cy.get('#pass').type(datosFixture.usuario.pass); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datosFixture.mensaje.error); //datosFixture.mensajeError.mError
        //cy.log(data)
        //cy.get('#messageError').contains('Credentials were not found')
    });
});