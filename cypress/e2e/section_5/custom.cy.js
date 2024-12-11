/// <reference types="cypress" />
require('cypress-plugin-tab')
import 'cypress-file-upload'
describe('Reference Windows',()=>{
   let espera= 1500
   before(()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(espera)
    })
   
    it("properties charset",()=>{
    cy.Texto_visible("#userName","Juan", 500)
    cy.Texto_visible("#userEmail","luis@gmail.com", 1000) 
    cy.Texto_visible_xpath("//textarea[@id='currentAddress']","Paquera Puntarenas", 1000) 
    cy.Click_force("#submit",1000)
})


})