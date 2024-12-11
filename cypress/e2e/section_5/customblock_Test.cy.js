/// <reference types="cypress" />
require('cypress-plugin-tab')
import 'cypress-file-upload'
describe('Test demo form',()=>{
   let time= 500
  
   
   beforeEach(()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
    cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
    cy.wait(time)
    })

    Cypress.on("uncaught:exception",(err,runnable)=>{
        return false
    })
   
    it("Test 1 phone invalid",()=>{
    cy.BlockForm("Luis","Castro","luis@gmail.com","87997678","Paquera Puntarenas","Costa Rica","Alabama","61150","demoqa.com","Project Block Test",time)
    cy.validator_form("[data-bv-validator='phone']","Please supply a vaild phone number with area code", "Phone Number",time)  
    })

    it("Test 2 email invalid",()=>{
        cy.BlockForm("Luis","Castro","luisgmail.com","8799767810","Paquera Puntarenas","Costa Rica","Alabama","61150","demoqa.com","Project Block Test",time)
        cy.validator_form("[data-bv-validator='emailAddress']","Please supply a valid email address", "Email Form",time)  
    })

    it("Test 3 last name invalid",()=>{
        cy.BlockForm("Luis","C","luis@gmail.com","8799767810","Paquera Puntarenas","Costa Rica","Alabama","61150","demoqa.com","Project Block Test",time)
        cy.validator_form('.has-error > .inputGroupContainer > [data-bv-validator="stringLength"]',"Please enter more than 2 characters", "Last name Form",time)  
    })

    it("Test 4 name invalid",()=>{
        cy.BlockForm("L","Castro","luis@gmail.com","8799767810","Paquera Puntarenas","Costa Rica","Alabama","61150","demoqa.com","Project Block Test",time)
        cy.validator_form('.has-error > .inputGroupContainer > [data-bv-validator="stringLength"]',"Please enter more than 2 characters", "Name Form",time)  
    })
    it.only("Test 5 name invalid",()=>{
        cy.BlockForm("Luis","Castro","luis@gmail.com","8799767810","P","Costa Rica","Alabama","61150","demoqa.com","Project Block Test",time)
        cy.validator_form('.has-error > .inputGroupContainer > [data-bv-validator="stringLength"]',"Please enter more than 8 characters", "Direction Form",time)  
    })


})