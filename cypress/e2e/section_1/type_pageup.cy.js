/// <reference types="cypress" />

describe('Section 1 Type page Up',()=>{
    it("Type PageUp",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.get("#userName").type("{pageup}")
    
    cy.wait(4000)
    })


    it.only("Type PageDown",()=>{
        cy.on("uncaught:exception",()=> false)
    
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.get("#userName").type("{pagedown}")
        
        cy.wait(4000)
        })
})