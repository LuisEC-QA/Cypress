import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')


describe("Demo Rest API", ()=>{
    let data;
    it("test Api Get",()=>{
        data=cy.request("http://localhost:3000/posts")

        data.its("status").should("equal",200)

    })

    it("test Api Get 2",()=>{
        data=cy.request("http://localhost:3000/posts")
        .should((response)=> {
                expect(response.status).to.eq(200)
            })
    })
    it("test Api Get Method",()=>{
        data=cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept:"application/json"
            } 
        }).then(response=>{
            let data;
            data=JSON.parse(JSON.stringify(response.body))
            cy.log(data)
            expect(data[0]).has.property("title","Cypress")
            expect(data[1]).has.property("title","Selenium")
        })


    })

})