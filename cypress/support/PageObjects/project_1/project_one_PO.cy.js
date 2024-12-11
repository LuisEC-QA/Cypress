class ProjectOne_PO{
    visitHome(){
        let time=500
        before(()=>{
            cy.on("uncaught:exception",()=> false)
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(time)
            })
    }

    SectionOne(name,last_name,email,phone,dir1,city,time){
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
    }
    SectionTwo(state,cp,web,project,time){
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
    }

}//final
export default ProjectOne_PO;