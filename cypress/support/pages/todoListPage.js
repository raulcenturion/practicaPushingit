export class TodoListPage { 
     constructor() {
        this.validarAll = '#all';
        this.validarCompleted = 'completed';
        this.validarActive = '#active';
        this.validarRemoveAll = '#removeAll'
    }

    botonAll() {
        cy.get(this.validarAll);
    };

    botonCompleted() {
        cy.get(this.validarCompleted);
    };

    botonActive() {
        cy.get(this.validarActive);
    };
    botonRemoveAll() { 
        cy.get(this.validarRemoveAll);

    };

};