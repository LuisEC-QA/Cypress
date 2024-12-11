
/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section 2 Checkbox',()=>{
    it("Checkbox 1",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demo.seleniumeasy.com/basic-radiobutton-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation')
    cy.get('.panel-body > :nth-child(2) > input').check()
    
})


    
})