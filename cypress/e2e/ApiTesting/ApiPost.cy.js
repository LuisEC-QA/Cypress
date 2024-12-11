import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')


describe("Demo Rest API", ()=>{
    let data;
    
    it("test Api Post Method",()=>{
        data=cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body:{
                "id": "6",
                "title": "Jira"
            } 
        }).then(response=>{            
            expect(response.status).to.eql(201)
        })


    })
    it.only("test Api Post Method",()=>{
        for(let  x=1;x<10;x++){
        let tx=Math.random().toString(10)    
        data=cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body:{
                "id": 6+x,
                "title": tx
            } 
        }).then(response=>{            
            expect(response.status).to.eql(201)
        })
        }

    })

})