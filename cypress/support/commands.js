// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector, texto, tiempo) => { 

cy.get(selector).should("be.visible").type(texto)
cy.wait(tiempo)
})

Cypress.Commands.add('Texto_visible_xpath', (selector, texto, tiempo) => { 
    
    cy.xpath(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Click', (selector, tiempo) => { 
    
    cy.get(selector).should("be.visible").click()
    cy.wait(tiempo)
})
Cypress.Commands.add('BlockForm', (name,last_name,email,phone,dir1,city,state,cp,web,project,time) => { 
   
    cy.xpath("//input[@name='first_name']").should("be.visible").type(name)
    cy.wait(time)
    cy.xpath("//input[@name='last_name']").should("be.visible").type(last_name)
    cy.wait(time)
    cy.xpath("//input[@name='email']").should("be.visible").type(email)
    cy.wait(time)
    cy.xpath("//input[@name='phone']").should("be.visible").type(phone)
    cy.wait(time)
    cy.xpath("//input[@name='address']").should("be.visible").type(dir1)
    cy.wait(time)
    cy.xpath("//input[@name='city']").should("be.visible").type(city)
    cy.wait(time)
    cy.xpath("//select[@name='state']").should("be.visible").select(state, {force:true})
    cy.wait(time)
    cy.xpath("//input[@name='zip']").should("be.visible").type(cp)
    cy.wait(time)
    cy.xpath("//input[@name='website']").should("be.visible").type(web)
    cy.wait(time)
    cy.xpath('//*[@id="contact_form"]/fieldset/div[10]/div/div[1]/label/input').should("be.visible").check().should("be.checked")
    cy.wait(time)
    cy.xpath("//textarea[@class='form-control']").should("be.visible").type(project)
    cy.wait(time)
    cy.xpath("//button[@type='submit'][contains(.,'Send')]").should("be.visible").click({force:true})
    cy.wait(time)
    
})

Cypress.Commands.add('validator_form', (selector, mess, form,time) => {    
    cy.get(selector).should("be.visible").should("contain",mess).then((data)=>{
        cy.log(data.text())             
        cy.log("##########################")
        cy.log("Invalid"+ form)
        cy.log("##########################")        
        cy.wait(time)
    })
})

