/// <reference types="cypress" />
require('cypress-plugin-tab')
import ProjectOne_PO from '../../support/PageObjects/project_1/project_one_PO.cy'
describe('Test demo form',()=>{
   let time= 500
    const master=new ProjectOne_PO()

    master.visitHome()
  
    it("Test 1",()=>{
    master.SectionOne("Luis","Castro","luis@gmail.com","1234567890","Avenue One, Corner Two","United States",600)
   

    
    })
    
    it("Test 2",()=>{
    master.SectionTwo("Colorado","61150","demoqa.com","Project Object Model",600)
        
    })

    it.only("Test 3",()=>{
        master.SectionOne("Luis","Castro","luis@gmail.com","12327890","Avenue One, Corner Two","United States",600)
        master.SectionTwo("Colorado","61150","demoqa.com","Project Object Model",600)
        cy.validator_form("[data-bv-validator='phone']","Please supply a vaild phone number with area code", "Phone Number",time)  
        cy.screenshot("Error Campo Telefono")
        
    
        })
    })