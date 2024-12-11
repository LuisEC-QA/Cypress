/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Tables',()=>{
    it("Tables elements child",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
    cy.wait(espera)
    cy.xpath("//a[@href='#myModal0']").click()
   // cy.on("window.alert",(str)=>{
    //    expect(str).to.eq("This is the place where the content for the modal dialog displays")
   // })
   cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click()
    
}) 
})