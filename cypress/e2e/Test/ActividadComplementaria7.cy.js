describe('Actividad complementaria 7', () => { 
    
     beforeEach("Actividad complementaria 7", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist')
        cy.contains('To Do List').click()
    })

  	it("Deberia sacar una foto completa", () =>{
        //agregar 3 tareas y sacar una foto a la pantalla completa
       cy.get('#task').type('Tarea 1');
       cy.get('#sendTask').click();
       cy.xpath(`//*[@id="task"]`).type('Tarea 2');
       cy.xpath(`//*[@id="sendTask"]`).click();
       cy.get('#task').type('Tarea 3');
       cy.get('#sendTask').click();
       cy.screenshot({ capture: "fullPage" });
       cy.get('#removeAll').click();   
	})
  
    it("Deberia sacar una foto a las tres tareas", () =>{
       //agregar 3 tareas y sacar una foto a las tareas
       //(las 3 tareas en la misma foto - cuadro celeste)
       cy.get('#task').type('Tarea 1');
       cy.get('#sendTask').click();
       cy.xpath(`//*[@id="task"]`).type('Tarea 2');
       cy.xpath(`//*[@id="sendTask"]`).click();
       cy.get('#task').type('Tarea 3');
       cy.get('#sendTask').click();
       //cy.xpath(`//ul[@role='list']`).screenshot("Segmento de 3 tareas");
       cy.get('[role="list"]').screenshot("Segmento de 3 tareas");
       cy.get('#removeAll').click();
	})
 })
 
// Instalar git
// Inicializa un repositorio en github desde visual studio code
// Subi el repositorio completo. Recorda usar .gitignore para ignorar la carpeta node modules
// recorda usar los comandos git add (o usa visual studio code para elegir los archivos) // git commit -m "mensaje" // git push origin {nombre de tu branch}
// SI es la primera vez que usas git te va a pedir que pongas las credenciales y autorices github en el navegador
 
 