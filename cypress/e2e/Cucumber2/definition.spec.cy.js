import { Given,Then, When, And } from "@badeball/cypress-cucumber-preprocessor"

Given('Abrir el navegador',()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/text-box')    
    cy.wait(1000)
})

When('Cargando el nombre',()=>{
cy.get("#userName").should("be.visible").type("Luis Carlos")
cy.wait(1000)
})

When('Cargando el email',()=>{
    cy.get("#userEmail").should("be.visible").type("luis@gmail.com")
    cy.wait(1000) 
})

And('Cargando la direccion',()=>{
    cy.get("#currentAddress").should("be.visible").type("Paquera, Puntarenas")
    cy.wait(1000) 
})
Then('Validar el nombre de la página',()=>{
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)
})