import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')


describe("Demo Rest API", ()=>{
    it("test 1",()=>{

        const data={
            "Nombre": "Luis",
            "LastName": "Castro",
            "Age":"26",
            "Tel": "88845554"

        }
        cy.log(data["Nombre"])
        cy.log(data["LastName"])
        cy.log(data["Age"])
        cy.log(data["Tel"])
    })

})