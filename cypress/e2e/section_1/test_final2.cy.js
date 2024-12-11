/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section 1 Type page Up',()=>{
    it("Type PageUp",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://computer-database.gatling.io/computers')
    cy.title().should('eq','Computers database')
    
    cy.get("#searchbox").type("ARRA")
    cy.wait(1000)
    cy.get("#searchsubmit").click()
    cy.wait(1000)
    cy.xpath("//*[@id='main']/table/tbody/tr/td[1]/a").click()
    cy.get("#main > h1").contains('Edit computer')
    cy.get("#name").clear()
    cy.wait(1000)
    cy.get("#name").type("Luis Desktop")
    .tab().type("2024-01-20")
    .tab().type("2025-10-19")
    cy.get("#company").should("be.visible").select("ASUS").should("have.value","36")
    cy.get('.primary').click()
    cy.wait(1000)
    cy.get('.alert-message').should("be.visible")
    cy.wait(2000)
    cy.get("#searchbox").clear()
    cy.get("#searchbox").type("Luis Desktop")
    cy.get("#searchsubmit").click()
    cy.wait(1000)
    
    

})


    
})