/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Reference Windows',()=>{
    it("properties charset",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq','The Number Game')
    cy.wait(1000)
    cy.document().should("have.property","charset").and("eq","UTF-8")
    cy.wait(3000)
    
})

it.only("Windows URL",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq','The Number Game')
    cy.wait(1000)
    cy.url().should("include","random-number.html")
    cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
    
})

})