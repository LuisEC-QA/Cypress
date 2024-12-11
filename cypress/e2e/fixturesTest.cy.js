
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
    
   
 })
   
    it("Charge JSON",()=>{
    cy.fixture("dataMock").then((dataJson)=>{ //promesa JSON alias
        dataJson.forEach(data => {
            const d_name=data.name
            const d_email=data.email
            const d_cAd=data.cAddress
            const d_pAd=data.pAddress


            cy.on("uncaught:exception",()=> false)
            cy.visit('https://demoqa.com/text-box')
            cy.title().should('eq','DEMOQA')


            cy.get('#userName').should("be.visible").type(d_name)
            cy.get('#userEmail').should("be.visible").type(d_email)
            cy.get('#currentAddress').should("be.visible").type(d_cAd)
            cy.get('#permanentAddress').should("be.visible").type(d_pAd)
            cy.get('#submit').click({force:true})   
        });
    })
     

})


})