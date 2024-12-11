/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Invoke',()=>{
    it("invoke text",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(espera)
    cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
    cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
    }) 

    it("invoke text/2",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
    cy.title().should('eq','Input Validation')
    cy.wait(espera)
    cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
    cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
    cy.xpath("//label[@for='firstname'][contains(.,'First name:')]").invoke("text").as("tittle_name")
    cy.get("@tittle_name").should("contain","First name:").then(()=>{
        cy.get("#firstname").type("Luis Enrique")
    })
    })

    it("invoke style",()=>{
        let espera= 1500
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(espera)
        cy.get('[for="firstname"]').invoke("attr","style","color:blue; font-size: 50px")

    })

    it("invoke not visible",()=>{
        let espera= 1500
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(espera)
        cy.get('[for="firstname"]').invoke("hide")
        cy.get('#firstname').invoke("hide")
        cy.wait(espera)
        cy.get('[for="firstname"]').invoke("show","4s")
        cy.get('#firstname').invoke("show","4s")
    })

    it("invoke test",()=>{
        let espera= 1500
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(espera)
        cy.get('#firstname').should("be.visible").type("Luis Enrique").then(()=>{
            cy.wait(espera)
            cy.get('[for="surname"]').invoke("show","6s")
            cy.get('#surname').invoke("show","8s") 
            cy.wait(3000)
            cy.get('#surname').type("Castro Porras")
        })
    })

    it.only("invoke src",()=>{
        let espera= 1500
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(espera)
        cy.xpath("//img[@src='http://demo.seleniumeasy.com/img/930_180.png']").invoke("attr","src").should("include","img/930_180.png")


    }) 

})