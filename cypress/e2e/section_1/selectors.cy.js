/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Section 1 Selector',()=>{
    
    it("Selectors ID",()=>{
    cy.log("Bienvenido a Cypress Luis")
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
    cy.get("#userName").should("be.visible").type("Luis Carlos")
    cy.get("#userName").should("be.visible").type("Luis Carlos")
    cy.wait(4000)
    })
  
    it("Selectors atributos",()=>{
    cy.log("Bienvenido a Cypress Luis")
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
    cy.get("[placeholder='Full Name']").should("be.visible").type("Luis Carlos")           
    cy.wait(4000)
    })

    it.only("Selectors ID",()=>{
        cy.log("Bienvenido a Cypress Luis")
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(2000)
        cy.get(".custom-control-label").contains("Other").click()
        
        })
    
})