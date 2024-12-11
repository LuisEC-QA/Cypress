/// <reference types="cypress" />
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')
describe('Mouse Events',()=>{
    it("Drag and Drop",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    cy.title().should('eq','The Internet')
   
    cy.get('#column-a').drag("#column-b",{force:true})
   
    
})


it("Drag and Drop 2",()=>{
    let espera= 1500
    const dataTransfer = new DataTransfer;
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/drag-and-drop-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Drag and Drop Demo')
    cy.wait(espera)
    cy.get('#todrag > :nth-child(2)').drag("#mydropzone")
    cy.wait(espera)
    //metodo distinto
    cy.get("#todrag > :nth-child(3)").trigger('dragstart', { dataTransfer })
    cy.get("#mydropzone").trigger('dragenter').trigger('dragover', { dataTransfer }).trigger('drop', { dataTransfer })
    cy.get("#todrag > :nth-child(3)").trigger('dragend')  
    cy.wait(espera)
    
    cy.get('#todrag > :nth-child(4)').drag("#mydropzone",{force:true})
})

it("Mouse over",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://www.way2automation.com/')
    cy.title().should('eq','Get Online Selenium Certification Course | Way2Automation')
    cy.wait(espera)
    cy.contains("Resources").trigger("mouseover")
    cy.wait(espera)
    
})

it('Hover and Validate Text using realHover()', ()=> {
    cy.visit('https://www.way2automation.com/')
    cy.contains('Resources').realHover('mouse')
    cy.contains('Practice Site 1').click()
   // cy.get('div:nth-child(3) > div > h5').should('be.visible')
    
})

it.only('Range Slider', ()=> {
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://the-internet.herokuapp.com/horizontal_slider')
    //cy.title().should('eq','DEMOQA')
    cy.wait(espera)
    cy.get('#content > div > div > input[type=range]').invoke("attr","value","4")
})

})