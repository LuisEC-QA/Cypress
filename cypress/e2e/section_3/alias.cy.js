/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Alias',()=>{
    it("Manage Alias",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(espera)
    cy.get('#firstname').should("be.visible").as("nom")
    cy.get("@nom").type("Pedro")

    cy.get('#surname').should("be.visible").as("ap")
    cy.get("@ap").type("Castro Perez")

    cy.get('#age').should("be.visible").as("ag")
    cy.get("@ag").type("25")

    cy.get('#country').should("be.visible").as("co")
    cy.get("@co").select("Costa Rica").should("have.value","Costa Rica")

    cy.get('#notes').should("be.visible").as("nt")
    cy.get("@nt").type("Alias Content")

    cy.get('[type="submit"]').should("be.visible").as("sub")
    cy.get("@sub").click()
}) 


})