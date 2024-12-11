/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Tables',()=>{
    it("Tables elements child",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
    cy.wait(espera)
    cy.get(".btn-group").children(".btn-danger").should("contain","Red").click({force:true})
})

it("Tables elements EQ",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get("[type='button']").eq(2).should("contain","Orange").click({force:true})
    cy.wait(espera)
    cy.get("[type='button']").eq(4).should("contain","All").click({force:true})
})

it("Tables elements filter",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click({force:true})
    cy.wait(espera)
    cy.get("[type='button']").filter(".btn-success").should("contain","Green").click({force:true})
    cy.wait(espera)
    cy.get("[type='button']").filter(".btn-danger").should("contain","Red").click({force:true})
    cy.get("[type='button']").eq(4).should("contain","All").click({force:true})

})

it("Tables elements find",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get(".btn-group").find(".btn-warning").should("contain","Orange").click({force:true})
    cy.wait(espera)
    cy.get(".btn-group").find(".btn-danger").should("contain","Red").click({force:true})
    
})

it("Tables elements find",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get(".btn-group").find("button").first().click({force:true})
    cy.wait(espera)
    cy.get(".btn-group").find("button").last().click({force:true})
})

it("Tables elements nextAll",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get("[type='button']").should("contain","Green")
    cy.wait(espera)
    cy.get("[type='button']").should("contain","Green").nextAll().should("have.length",4)
})

it("Tables elements Father",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get("[type='button']").parent().should("have.class","btn-group")
})

//Elemento por elemento
it("Tables elements Test",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get("[type='button']").eq(4).should("contain","All").click({force:true}).then(()=>{
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('tbody > :nth-child(2) > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('tbody > :nth-child(3) > :nth-child(1)').click()
        cy.wait(1000)
      //  cy.get('tbody > :nth-child(4) > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('tbody > :nth-child(5) > :nth-child(1)').click()
    })
    cy.wait(1000)
    cy.get(".btn-group").find(".btn-success").should("contain","Green").click({force:true}).then(()=>{
        cy.wait(1000)
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('tbody > :nth-child(4) > :nth-child(1)').click()
        cy.wait(1000)
    })
    cy.wait(1000)
    cy.get(".btn-group").find(".btn-warning").should("contain","Orange").click({force:true}).then(()=>{
        cy.wait(1000)
        cy.get('tbody > :nth-child(2) > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('tbody > :nth-child(5) > :nth-child(1)').click()
        cy.wait(1000)
    })
    cy.wait(1000)
    cy.get(".btn-group").find(".btn-danger").should("contain","Red").click({force:true}).then(()=>{
        cy.wait(1000)
        cy.get('tbody > :nth-child(3) > :nth-child(1)').click()
        cy.wait(1000)
        
    })
    cy.get("[type='button']").eq(4).should("contain","All").click({force:true})
})

//Función check
it("Tables elements Test/2",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    cy.get("[type='button']").eq(4).should("contain","All").click({force:true}).then(()=>{
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck({force:true})
        cy.wait(1000)
        cy.get("[type='checkbox']").check({force:true})
    })
    cy.wait(1000)
    cy.get(".btn-group").find(".btn-success").should("contain","Green").click({force:true}).then(()=>{
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck({force:true})
        cy.wait(1000)
        cy.get("[type='checkbox']").check({force:true})
    })
    cy.wait(1000)
    cy.get(".btn-group").find(".btn-warning").should("contain","Orange").click({force:true}).then(()=>{
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck({force:true})
        cy.wait(1000)
        cy.get("[type='checkbox']").check({force:true})
    })
    cy.wait(1000)
    cy.get(".btn-group").find(".btn-danger").should("contain","Red").click({force:true}).then(()=>{
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck({force:true})
        cy.wait(1000)
        cy.get("[type='checkbox']").check({force:true})
        
    })
    cy.get("[type='button']").eq(4).should("contain","All").click({force:true})
    cy.wait(1000)
    cy.get("[type='checkbox']").uncheck({force:true})
    cy.wait(1000)
})

it("Tables elements Test/3",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
    cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
    cy.wait(espera)
    
    for (let x = 1; x <=4; x++) {
        let nombreBoton = ""

        if (x==1) {
           nombreBoton="Green" 
        } 
        else if (x==2){
            nombreBoton="Orange" 
        }
        else if (x==3){
            nombreBoton="Red" 
        }
        else if (x==4){
            nombreBoton="All" 
        }

        cy.get("[type='button']").eq(x).should("contain",nombreBoton).click({force:true})
        cy.wait(espera)
        cy.get("[type='checkbox']").uncheck({force:true})
        cy.wait(espera)
        cy.get("[type='checkbox']").check({force:true})
        cy.wait(espera)
    }
    
})

it("Tables elements data",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
    cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
    cy.wait(espera)
    const datos=[];
    
    cy.get(".odd td").each(($el,index,$list)=>{
        datos[index]=$el.text()
    }).then(()=>{
        for (let i = 0; i < datos.length; i++) {
            cy.log(datos[i])
            
        }
    })
    
})

it("Tables elements data",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
    cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
    cy.wait(espera)
    const datos=[];
    let cantidad = 0
    
    cy.get("[role='row'] td").each(($el,index,$list)=>{
        datos[index]=$el.text()
    }).then(()=>{
        for (let i = 0; i < datos.length; i++) {
            cy.log(datos[i])
            if (Number(datos[i])) {
                cantidad+=Number(datos[i])
            }
        }
        cy.log("La cantidad total es: "+ cantidad)
        expect(cantidad).eq(394)
    })
    
})

it.only("Tables elements data",()=>{
    let espera= 1500
    cy.on("uncaught:exception",()=> false)
    cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
    cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
    cy.wait(espera)
    const campo=cy.get('tbody > :nth-child(7) > :nth-child(2)')
    cy.log(campo)
    campo.each(($el,index,$list)=>{
        const dato=$el.text()
        cy.log(dato)

        if (dato.includes("Javascript Developer")) {
        }
        campo.eq(index).next().next().then((age)=>{
            const Edad=age.text()
            cy.log("La edad del Developer es: "+Edad)
            expect(Edad).eq('39')

        })
    })
    
    
   
    
})

})
