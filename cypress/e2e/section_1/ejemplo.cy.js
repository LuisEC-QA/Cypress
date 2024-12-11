/// <reference types="cypress" />

describe('Primer test con Cypress',()=>{
    it("Prueba XPath",()=>{
    cy.log("Bienvenido a Cypress Luis")
    cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
    
    cy.xpath('//input[contains(@name,"first_name")]').type("Luis")
    cy.xpath('//input[contains(@name,"last_name")]').type("Castro")
    cy.xpath('//input[contains(@name,"email")]').type("luis.en@gmail.com")
    cy.xpath("//input[contains(@name,'phone')]").type("8825224585")


    cy.wait(4000)
    })
})