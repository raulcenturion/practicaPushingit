export class LoginPage {

    constructor() {
        this.usuarioInput = '#user';
        this.contraseñaInput = '#pass';
        this.submitForm = '#submitForm'
    }

    escribirUsuario() {
        cy.get(this.usuarioInput);
    };

    escribirContraseña() {
        cy.get(this.contraseñaInput);
    };

    enviarFormulario() {
        cy.get(this.submitForm);
    };
};