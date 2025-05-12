import { LoginMetodos } from "./pages/pages/login/login.metodos"
import { Logger } from "./pages/pages/util/logger"

describe('template spec', () => {
  it('passes', () => {

    const usuario = "random01";
    const contraseña = "random01";

    Logger.stepNumber(1)
    Logger.step("Navegar en Demoblaze page")
    cy.visit('https://demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step("Hacer el click en Login")
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Logearse con estas credenciales: "${usuario}/${contraseña}"`)
    LoginMetodos.login(usuario,contraseña)
    Logger.verification(`The Home should show "Welcome ${usuario}" text`)
    cy.get('a#nameofuser').should('contain.text', usuario)

   
  })
})