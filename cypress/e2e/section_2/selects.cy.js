
/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section Select with Assert',()=>{
    it("Select 1",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
    cy.wait(1000)
    cy.get('#select-demo').should("be.visible").select("Friday")
    cy.wait(3000)
    cy.xpath("//*[@id='easycont']/div/div[2]/div[1]/div[2]/p[2]").should("be.visible").contains("Day selected :- Friday")
    cy.get('#select-demo').should("be.visible").select("Saturday").should("have.value","Saturday") //Assert have value
    cy.wait(3000)
    cy.xpath("//*[@id='easycont']/div/div[2]/div[1]/div[2]/p[2]").should("be.visible").contains("Day selected :- Saturday") //Assert contains
    cy.wait(3000)
})

it("Select 2",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google')
    cy.wait(1000)
    cy.get('#APjFqb').should("be.visible").type("Ferrari").type("{enter}")
    cy.get('[data-hveid="CBgQAA"] > .nPDzT > .YmvwI').click()
    
})

it("Select 3",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
    cy.wait(1000)
    cy.get('#multi-select').should("be.visible").select("Ohio")
    cy.get('#multi-select').should("be.visible").select("Texas","Ohio")
})
it("Select 3",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
    cy.wait(1000)
   // cy.get('#multi-select').should("be.visible").select("New York")
    cy.get('#multi-select').then($select => {
        // Encuentra el elemento específico que deseas hacer "control click"
        const optionIndex = [0,3]; // Por ejemplo, el tercer elemento en el multi select
        
        
        // Realiza el "control click" en el elemento
        optionIndex.forEach(index => {
            cy.get('option').eq(index).trigger('click', { ctrlKey: true }).should('have.attr', 'selected', 'selected');
        });
    });
    //cy.get('#multi-select').should("be.visible").select("Ohio","New York") mediante select
    //cy.get('[value="Texas"]').should("be.visible").click("{force: true}")
}) 

it.only("Select 3",()=>{
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
    cy.wait(1000)  
    cy.get('#multi-select').should("be.visible").select(["Ohio","New York"]).then(()=>{
            cy.get("#printMe").should("be.visible").click()
    })
    
}) 
})