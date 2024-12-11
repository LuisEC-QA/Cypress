/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section 1 Click',()=>{
    it("Click sencillos",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    cy.wait(1000)
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').should("be.visible").type("Admin").tab().type("admin123")
    cy.get('.oxd-button').should("be.visible").click()
    cy.get(":nth-child(2) > .oxd-main-menu-item").should("be.visible").click()
    cy.wait(4000)
    })

    it("Click force-true",()=>{
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').should("be.visible").type("Admin").tab().type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(":nth-child(2) > .oxd-main-menu-item").should("be.visible").click({force:true})
        cy.wait(4000)
        })


    it.only("Click Coordenadas",()=>{
        cy.on("uncaught:exception",()=> false)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').should("be.visible").type("admin3412").tab().type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1000)
        cy.get('.oxd-topbar-header-title').should("be.visible").click(50,5)
        cy.get('.oxd-topbar-header-title').should("be.visible").click(70,5)
        cy.wait(4000)
        })
})