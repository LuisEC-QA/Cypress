/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('snipets',()=>{
    let espera=1500
    before(()=>{
        cy.wait(espera)
    })
    beforeEach(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')  
        cy.wait(espera)
    })
    afterEach(()=>{
        cy.wait(espera)
    })
    after(()=>{
        cy.wait(espera)
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')  
        
    })
    it("test hooks",()=>{
        cy.wait(espera)
    })
    it("test hooks 2",()=>{
        cy.wait(espera)
    })
})