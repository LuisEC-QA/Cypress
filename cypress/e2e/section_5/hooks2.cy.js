/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('snipets',()=>{
    let espera=1500
    before(()=>{
        cy.wait(espera)
    })
    beforeEach(()=>{
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')  
        cy.wait(espera)
    })
    afterEach(()=>{
        cy.wait(espera)
    })
    after(()=>{
        cy.wait(espera)
        
        
    })
    it("test hooks",()=>{
        cy.get("#isAgeSelected").check().should("be.checked")
    
    })
        it("test hooks 2",()=>{
            cy.get("#isAgeSelected").uncheck().should("not.be.checked")
    })
})