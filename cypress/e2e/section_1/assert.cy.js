/// <reference types="cypress" />

describe('Section 1 Assert',()=>{
    it("Test intro Assert",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
    
    cy.get("#firstName").should("be.visible").type("Juan")
    cy.get("#lastName").should("be.visible").type("Porras")
    cy.get("#userEmail").should("be.visible").should("be.enabled").type("hola@gmail.com")
    cy.wait(4000)
    })
})