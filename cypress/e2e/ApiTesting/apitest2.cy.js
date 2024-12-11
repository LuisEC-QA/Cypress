import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')


describe("Demo Rest API", ()=>{
    it("test 2",()=>{

        const data={
            "Name": "Luis",
            "LastName": "Castro",
            "Age":"26",
            "Tel": "88845554",
            "TecnoSkills":[
                {
                    "Name": "cypress",
                    "Descripcion": "Automation test Front",
                },
                {
                    "Name": "Selenium",
                    "Descripcion": "Automation test Back",
                },
                {
                    "Name": "Jmeter",
                    "Descripcion": "Performance testing",
                },
            ]


        }
        cy.log(data["Name"])
        cy.log(data["LastName"])
        cy.log(data["Age"])
        cy.log(data["Tel"])
    })

})