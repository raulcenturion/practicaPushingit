describe('Actividad complementaria 5', () => { 
    const TIMEOUT = 20000;
    
     beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

  	it("Deberia Verificar que el boton 'cargando' su texto vuelva a ser 'button'", () =>{
			// Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
        cy.get('[role="progressbar"]', {timeout: TIMEOUT}).should('not.exist');
        cy.get('#wait').should('have.text', 'Button');
	})
  
    it("Deberia Verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds'", () =>{
			// verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
        cy.get('[role="progressbar"]', {timeout: TIMEOUT}).should('not.exist');
        cy.get('#colorChangeMessage').should('have.text', 'Wait 5 more seconds');
	})
  
    it("Deberia Verificar que cambie el mensaje de los 10 segundos luego de 5 segundos.", () => {
        // Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente.
        //(que cambie el mensaje)('have.text') 2 lineas de codigo
        cy.get('#message', { timeout: TIMEOUT }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
        cy.get('#message', { timeout: TIMEOUT }).should('have.text', 'You are a man of patience and have waited fifteen seconds');

        
	})
 })