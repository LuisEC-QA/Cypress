/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('snipets',()=>{
    it("snipets 1",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(espera)
    
    
    
})
})