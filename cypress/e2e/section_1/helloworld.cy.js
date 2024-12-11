describe("Bienvenido al curso de Cypress seccion 1", ()=>{

        

        it("Segundo Test -> campo name",()=>{
            cy.on("uncaught:exception",()=> false)
            cy.visit("https://demoqa.com/text-box")
            
           cy.get("#userName").type("Luis Castro")
            cy.wait(4000)

        })
})//cierre de describe