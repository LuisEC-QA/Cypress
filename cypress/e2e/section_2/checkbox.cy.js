
/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section 2 Checkbox',()=>{
    it("Checkbox 1",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
    cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
    cy.get("[type='checkbox']").check().should("be.checked")
    cy.wait(1000)
    cy.get("[type='checkbox']").uncheck().should("not.be.checked")

})

it.only("Checkbox por seleccion",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
    cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
    cy.get(':nth-child(6) > label > .cb1-element').check().should("be.checked")
    cy.wait(1000)
    
})
    
})