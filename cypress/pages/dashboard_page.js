class DashboardPage {

    pageElement = {
        dashboardHeader: "//header//*[text()='Dashboard']",
        admin_menu: "//ul[@class='oxd-main-menu']//span[text()='Admin']",
        directory_menu: "//a/span[text()='Directory']"
    }

    

    get_header_title() {
        return cy.xpath(this.pageElement.dashboardHeader).invoke('text')
        
    }

    click_on_admin_menu(){
        cy.xpath(this.pageElement.admin_menu).click()
    }

    click_on_directory_menu(){
        cy.xpath(this.pageElement.directory_menu).click()
    }
}


module.exports = DashboardPage;
