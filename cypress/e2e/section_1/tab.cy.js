/// <reference types="cypress" />
    require('cypress-plugin-tab')
describe('Section 1 Fuction TAB',()=>{
    it("Type tab",()=>{
    cy.log("Bienvenido a Cypress Luis")
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
    cy.get("#userName").type("Luis Carlos").tab().type("Castro"  +" Porras").tab().type("rodrigo@gmail.com")



    cy.wait(4000)
    })
})