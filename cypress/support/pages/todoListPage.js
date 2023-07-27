export class TodoListPage { 
     constructor() {
        this.validarAll = '#all';
        this.validarCompleted = '#completed';
        this.validarActive = '#active';
        this.validarRemoveAll = '#removeAll'
    }

    botonAll() {
        return cy.get(this.validarAll);
        
    };

    botonCompleted() {
        return cy.get(this.validarCompleted);
    };

    botonActive() {
        return cy.get(this.validarActive);
    };
    botonRemoveAll() { 
        return cy.get(this.validarRemoveAll);

    };

};