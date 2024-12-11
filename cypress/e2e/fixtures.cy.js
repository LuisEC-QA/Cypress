
/// <reference types="cypress" />
require('cypress-plugin-tab')
import 'cypress-file-upload'
describe('Fixtures',()=>{
   let espera= 1500
 //  before(()=>{
  //  cy.on("uncaught:exception",()=> false)
 //   cy.visit('https://demoqa.com/text-box')
  //  cy.title().should('eq','DEMOQA')
  //  cy.fixture("data").then((data)=>{
 //   globalThis.data=data
//    })
 //   cy.wait(espera)
 //   })

 before(()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.fixture("data").as("Datos_json") //alias
 })
   
    it("Charge JSON",()=>{
    cy.get("@Datos_json").then((data)=>{ //promesa JSON alias
    
    cy.get('#userName').should("be.visible").type(data.name)
    cy.get('#userEmail').should("be.visible").type(data.email)
    cy.get('#currentAddress').should("be.visible").type(data.cAddress)
    cy.get('#permanentAddress').should("be.visible").type(data.pAddress)
    cy.get('#submit').click({force:true})    
})
})


})