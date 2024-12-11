
/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section 1 Type page Up',()=>{
    it("Type PageUp",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demoqa.com/webtables')
    cy.title().should('eq','DEMOQA')
    cy.get("#searchBox").type("Cierra")
    cy.wait(1000)
    cy.get("#edit-record-1 > svg").click()
    cy.wait(1000)
    cy.get('#lastName').clear()
    cy.wait(1000)
    cy.get('#lastName').type("Rodriguez")
    cy.get('#age').clear()
    cy.wait(1000)
    cy.get('#age').type("25")
    cy.wait(1000)
    cy.get('#salary').clear()
    cy.wait(1000)
    cy.get('#salary').type("3500")
    cy.wait(1000)
    cy.get('#department').clear()
    cy.wait(1000)
    cy.get('#department').type("Quality Assurence")
    cy.wait(1000)
    cy.get('#submit').click()
    cy.wait(1000)
    cy.get("#searchBox").clear()
    
    cy.get('#addNewRecordButton').click()
    cy.wait(1000)
    cy.get('#firstName').type("Luis Enrique")
    cy.wait(1000)
    cy.get('#lastName').type("Castro Porras").tab().type("luis@gmail.com").tab().type("25").tab().type("3500").tab().type("QA Automation")
    cy.wait(1000)
    cy.get('#submit').click()
    cy.wait(1000)

    cy.get("#searchBox").type("Luis")
    

})


    
})