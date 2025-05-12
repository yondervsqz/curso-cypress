import { HomeMetodos } from "./pages/pages/home/home.metodos"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/index.html')
    HomeMetodos.clickOnProductLink("Iphone 6 32gb")
    cy.wait(5000)
  })
})