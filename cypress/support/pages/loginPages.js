export class LoginPage {

    constructor() {
        this.usuarioInput = '#user';
        this.contraseñaInput = '#pass';
        this.submitForm = '#submitForm'
    }

    escribirUsuario(text) {
        cy.get(this.usuarioInput).type(text);
    };

    escribirContraseña(text) {
        cy.get(this.contraseñaInput).type(text);
    };

    enviarFormulario() {
        cy.get(this.submitForm).click();
    };
};