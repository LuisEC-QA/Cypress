/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section 2 Checkbox',()=>{
    it("Checkbox 1",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html')
    cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
    cy.get(':nth-child(1) > .form-control').should("be.visible").select(["Isis","Laura","Giovanna"]).then(()=>{
        cy.get("#pickList > div > div.col-sm-2.pickListButtons > button.pAdd.btn.btn-primary.btn-sm").should("be.visible").click()
})
cy.get(':nth-child(3) > .form-control').should("be.visible").select(["Isis"]).then(()=>{
    cy.get("#pickList > div > div.col-sm-2.pickListButtons > button.pRemove.btn.btn-primary.btn-sm").should("be.visible").click()
})

})    
})