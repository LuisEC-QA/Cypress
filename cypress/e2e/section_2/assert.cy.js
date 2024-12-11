/// <reference types="cypress" />
require('cypress-plugin-tab')
describe('Section 2 Assert',()=>{
    it("Assert contains 1",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://kamuistore.online/')
    cy.title().should('eq','Kamui Online Store')
    cy.wait(2000)
    cy.get('.container > .section__header > .section__heading').contains("PREVENTA").click()
}) 

it("Assert fin, eq 2",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://www.nike.com/')
    cy.title().should('eq','Nike. Just Do It. Nike.com')
    cy.wait(2000)
    cy.get('.swiper-slide-active').find("._1GPQ9HJJ").eq(0).click().then(()=>{
        cy.wait(2000)
        cy.get('.wall-image-loader').find(".product-card__hero-image").eq(2).click().then(()=>{
            cy.get("#RightRail > div > div:nth-child(1) > div > div.d-lg-ib.mb0-sm.u-full-width.css-3rkuu4.css-1mzzuk6 > div > h2").then((e)=>{
                let genero = e.text()
                if(genero == "Men's Shoes"){
                    cy.log("El calzado es de hombre")
                }
            })
        
        })
    })

    cy.get('.mb8-sm > :nth-child(1) > :nth-child(1) > .d-lg-ib > .pr2-sm > .mb3-sm > .mt3-sm > .product-price__wrapper > [data-test="product-price"]').then((c)=>{
        let costo = c.text()
        costo= costo.slice(1,3)
        if(costo<100){
            cy.log("las tennis son accesibles")
          
            cy.wait(2000)
            cy.xpath('//*[@id="floating-atc-wrapper"]/div/button[1]').click({force:true})
            cy.wait(2000)
            cy.get(':nth-child(7) > .css-xf3ahq').click()
            cy.xpath('//*[@id="floating-atc-wrapper"]/div/button[1]').click({force:true})
        }
    })

})  

it("Contains.text have.text",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(2000)
    cy.get('#userName').should("be.visible").type("Luis")
    cy.get('#userEmail').should("be.visible").type("luis@gmail.com")
    cy.get('#submit').should("be.visible").click()

    cy.get('#name').should("be.visible").should("have.text","Name:Luis")
    cy.get('#name').should("be.visible").should("contain.text","Luis")
})  

it("Have.text",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(2000)
    cy.get('#userName').should("be.visible").type("Luis Castro Porras")
    
    

    cy.get("#userName").should("be.visible").should("have.value","Luis Castro Porras").then(()=>{
        cy.get('#userEmail').should("be.visible").type("luis@gmail.com")
        cy.get('#submit').should("be.visible").click()

    })
    
}) 


it("Have.class",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(2000)           
    cy.get("#userName").should("be.visible").should("have.class","mr-sm-2").then(()=>{
        cy.get('#userName').should("be.visible").type("Luis Castro Porras")
        cy.get('#userEmail').should("be.visible").type("luis@gmail.com")
        cy.get('#submit').should("be.visible").click()

    })
    
}) 


it("Have.class y function and",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(2000)       
    cy.get("#userName").should("be.visible").and("have.class","mr-sm-2").then(()=>{
        cy.get('#userName').should("be.visible").type("Luis Castro Porras")
        cy.get('#userEmail').should("be.visible").type("luis@gmail.com")
        cy.get('#submit').should("be.visible").click()

    })
    
}) 

it("not.Have.class y function and",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')
    cy.wait(2000)       
    cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-22").then(()=>{
        cy.get('#userName').should("be.visible").type("Luis Castro Porras")
        cy.get('#userEmail').should("be.visible").type("luis@gmail.com")
        cy.get('#submit').should("be.visible").click()

    })
    
}) 

it("Have.css and have.length",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demo.seleniumeasy.com/table-pagination-demo.html')
    cy.title().should('eq','Selenium Easy - Table with Pagination Demo')
    cy.wait(2000)        
    cy.get('#myTable >tr >td').should("have.length",91).and("have.css","padding","8px") 
}) 

it("contains por inicio",()=>{
    let espera=1000
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
    cy.wait(espera) 
    cy.get('.form-group > #user-message').should("be.visible").type("Contenido Nuevo") 
    cy.wait(espera) 
    cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})
    
}) 

it.only("Reto Assert",()=>{
    let espera=1000
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
    cy.wait(espera) 
    cy.get('.form-group > #user-message').should("be.visible").type("Contenido Nuevo") 
    cy.wait(espera) 
    cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})

    let a=35, b=20
    cy.wait(espera) 
    cy.get("#value1").invoke("attr","placeholder").should("contain","Enter value").then(()=>{

        cy.get("#value1").should("be.visible").and("have.class","form-control").type(a)
        cy.get("#value1").invoke("attr","style","color:blue")
    })
    
    cy.get("#value2").should("be.visible").and("have.class","form-control").type(b)
    cy.wait(espera) 
    cy.contains("[type='button']","Get Total").click()

    cy.get("#displayvalue").should("be.visible").then((e)=>{
        let r=a+b
        cy.log("el valor de r: " + r)
        cy.log(e.text())
        let res=e.text()
        if (r==res) {
            cy.log("Son iguales")
       }else{
        cy.log("Resultado incorrecto")
       }
       if(res>50){
        a=a-10
        b=b-10
        cy.get("#value1").should("be.visible").and("have.class","form-control").clear().type(a)
        cy.wait(espera) 
        cy.get("#value2").should("be.visible").and("have.class","form-control").clear().type(b)
        cy.wait(espera) 
        cy.contains("[type='button']","Get Total").click()
       }
    })



}) 
 
})