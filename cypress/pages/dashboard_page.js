class DashboardPage {

    pageElement = {
        dashboardHeader: "//header//*[text()='Dashboard']"
    }

    

    get_header_title() {
        return cy.xpath(this.pageElement.dashboardHeader).invoke('text')
        
    }
}


module.exports = DashboardPage;
