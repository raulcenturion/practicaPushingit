

describe('Actividad complementaria 8', () => {
// Tipo de peticion post
// URL https://pushing-it.onrender.com/api/register
// body {username, password, gender, year, month, day}
// Agregar aserciones para verificar status y body
    it('Deberia registrarse en PushingIT de forma satisfactoria', () => {
        const username = 'usuario' + Math.floor(Math.random() * 1000)
        const password = '123456!'
        const gender = "Male"
        const day = '10'
        const month = 'October'
        const year = "1980"
        
        cy.request({
						url: 'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body:{
                username: 'pushingit' + Math.floor(Math.random() * 1000),
                password: '123456!',
                gender: 'male',
                day: '10',
                month: 'October',
                year: '1980'
            }
        }).then(respuesta =>{
            expect(respuesta.status).to.be.equal(200)
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
      cy.visit('')
    })
})