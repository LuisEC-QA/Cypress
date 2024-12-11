/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('cicles ',()=>{
    it("for one",()=>{
    
        for (let i = 1; i <=100; i=i+10) {
        cy.log("Numero: "+ i)
        }  
    })

    it("for two",()=>{
    
        for (let i = 1; i <=10; i++) {
            let t=5
            cy.log(t + " X "+ i + " - " +t*i)
        }  
    })

    it("each one",()=>{
    let espera= 1500
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
    cy.title().should('eq','Women - My Shop')
    cy.wait(espera)
    
    cy.get(".product-name").each(($el,index,$list)=>{
       let producto= $el.text() 
        cy.log(producto)
        
    })
    })

    it("each two",()=>{
        let espera= 1500
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
        cy.title().should('eq','Women - My Shop')
        cy.wait(espera)
        
        cy.get(".product-name").each(($el,index,$list)=>{
           let producto= $el.text() 
            if (producto.includes("Blouse")) {
                cy.wrap($el).click()
            }
            
        })
        })

    it("each three",()=>{
            let espera= 1500
            cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
            cy.title().should('eq','Women - My Shop')
            
            cy.wait(espera)
            
        for (let x = 0; x <=3; x++) {
            
            cy.get("#center_column .product-name").eq(x).click({force: true})
            cy.wait(espera)
            cy.get('#group_1').select("M").should("have.value", "2")
            cy.wait(espera)
            cy.get(".exclusive > span").should("exist").then(($element)=>{
             if ($element.is(':visible')) {
                cy.wait(espera)
                cy.get(".exclusive > span").click({force: true})
                cy.wait(espera)
                cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force: true})
                cy.wait(3000)
                cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
            }else{               
                cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
            }
        })
        }

    })

    it.only("each four",()=>{
        let espera= 1500
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
        cy.title().should('eq','Women - My Shop')
        const datos=[];
        cy.wait(espera)
        
        cy.get("#center_column .product-name").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for (let x = 0; x <=datos.length; x++) {
            
                cy.get("#center_column .product-name").eq(x).click({force: true})
                cy.wait(espera)
                cy.get('#group_1').select("M").should("have.value", "2")
                cy.wait(espera)
                cy.get(".exclusive > span").should("exist").then(($element)=>{
                 if ($element.is(':visible')) {
                    cy.wait(espera)
                    cy.get(".exclusive > span").click({force: true})
                    cy.wait(espera)
                    cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force: true})
                    cy.wait(3000)
                    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
                }else{               
                    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
                }
            })
            }   
        })
})

})