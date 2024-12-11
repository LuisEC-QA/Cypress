/// <reference types="cypress" />

describe('Section 1 Value Title',()=>{
    it("Test validar titulo",()=>{
    cy.log("Bienvenido a Cypress Luis")
    cy.on("uncaught:exception",()=> false)
    //cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQa')
    cy.log("funciona bien")


    cy.wait(4000)
    })
})