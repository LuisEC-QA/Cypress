/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Date picker',()=>{
    it("properties charset",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
    cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')
    cy.wait(espera)
    cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("04/05/2024").then(()=>{
        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("{esc}")

    })
})

    it.only("dates 2",()=>{
        let espera= 1500
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(espera)
        cy.get('[placeholder="Start date"]').should("be.visible").type("19/10/2023").then(()=>{
            cy.get('[placeholder="Start date"]').should("be.visible").type("{esc}")
        })
        cy.wait(espera)
        cy.get('[placeholder="End date"]').clear().should("be.visible").type("20/01/2024 {esc}")
})
})