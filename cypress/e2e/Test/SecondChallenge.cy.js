/// <reference types="cypress" />

describe('Second Challenge', () => {
    //inicializa el fixture
    let datosFixture;

    before('Before', () => {
        cy.fixture('SecChall').then((data) => {
            datosFixture = data;
        })
    })

    beforeEach('Preconditions', () => {
        // visitar la pagina
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datosFixture.usuario.user);
        cy.get('#pass').type(datosFixture.usuario.pass); 
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click();
    });
    afterEach('Postconditions', () => {
        //borramos todo al finalizar
        cy.get('#removeAll').click();
    });

    it('Five tasks should be entered', () => {
        cy.get('#task').type('Tarea 1');
        cy.get('#sendTask').click();
        cy.xpath(`//*[@id="task"]`).type('Tarea 2');
        cy.xpath(`//*[@id="sendTask"]`).click();
        cy.get('#task').type('Tarea 3');
        cy.get('#sendTask').click();
        cy.xpath(`//*[@id="task"]`).type('Tarea 4');
        cy.xpath(`//*[@id="sendTask"]`).click();
        cy.xpath(`//*[@id="task"]`).type('Tarea 5');
        cy.xpath(`//*[@id="sendTask"]`).click();
        
    });
    it('Verify buttons', () => {
        cy.xpath(`//*[@id="all"]`).should('exist');
        cy.xpath(`//*[@id="completed"]`).should('exist');
        cy.get('#active'); 
        cy.get('#removeAll');
        
    });
    it('Add tasks scenario 1', () => {
        cy.get('#task').type('Tarea 1');
        cy.xpath(`//*[@id="sendTask"]`).click();
        cy.get('[class="chakra-text css-8atqhb"]').contains('p','Tarea 1').click();
        cy.xpath(`//*[@id="task"]`).type('Tarea 2');
        cy.xpath(`//*[@id="sendTask"]`).click();
        cy.get('[class="chakra-text css-8atqhb"]').contains('p', 'Tarea 2').click();
        cy.get('p').contains('Tarea 2').siblings('button').click();
        
    });
    it('Add tasks scenario 2', () => {
        cy.get('#task').type('Tarea 1');
        cy.xpath(`//*[@id="sendTask"]`).click();
        cy.xpath(`//*[@id="task"]`).type('Tarea 2');
        cy.xpath(`//*[@id="sendTask"]`).click();
        cy.get('p').contains('Tarea 1').siblings('button').click();
        
        
    });
});