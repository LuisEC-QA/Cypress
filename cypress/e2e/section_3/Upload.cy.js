/// <reference types="cypress" />
require('cypress-plugin-tab')
import 'cypress-file-upload'
describe('Reference Windows',()=>{
    it("properties charset",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.title().should('eq','DEMOQA')
    cy.wait(espera)
    
   const ruta="imagen.jpg"
   cy.get("[type='file']").attachFile(ruta)
    
})
})