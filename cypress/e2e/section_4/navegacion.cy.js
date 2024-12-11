/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Navegacion',()=>{
    it("Navegacion 1",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/')
    cy.title().should('eq','DEMOQA')
    cy.wait(espera)
    cy.get(':nth-child(1) > :nth-child(1) > .avatar').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type("Luis Castro")
    cy.wait(espera)
    cy.go("back")
    cy.wait(espera)
    cy.go("back")

    cy.go("forward")
    cy.wait(espera)
    cy.go("forward")
})
})