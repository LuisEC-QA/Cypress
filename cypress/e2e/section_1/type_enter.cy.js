/// <reference types="cypress" />

describe('Section 1 Type',()=>{
    it("Test validar titulo",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google')
    cy.get("#APjFqb").type("cypress io{enter}")
    cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
    cy.wait(4000)
    })
})