/// <reference types="cypress" />

class DirectoryPage {


    pageElements = {
        people_section: "div.orangehrm-container",

    }

    scroll_inside_element(){
        let hasMoreRecords = true;

        cy.intercept('GET', '**/api/v2/directory/*').as('loadMoreData')

        cy.get(this.pageElements.people_section).scrollIntoView()

        const scroll_and_fetch = () => {
            if(hasMoreRecords){
                try{
                    cy.get(this.pageElements.people_section).scrollTo('bottom', { ensureScrollable: false });
                } catch(err1){

                }

                
                try{ cy.wait('@loadMoreData').then((interception) => {
                    cy.wait(1500)
                    const respone = interception.response.body
                    const data = respone.data

                    if(data.length < 14){
                        // hasMoreRecords =false
                        // return
                    }
                    else {
                        scroll_and_fetch()
                    }
                })} catch(error){
                    hasMoreRecords =false
                    return
                }
                // cy.wait('@loadMoreData').then((interception) => {
                //     cy.wait(1500)
                //     const respone = interception.response.body
                //     const data = respone.data

                //     if(data.length < 14){
                //         hasMoreRecords =false
                //         return
                //     }
                //     else {
                //         scroll_and_fetch()
                //     }
                // })
            }
        }

        scroll_and_fetch()
    }
}



module.exports = DirectoryPage