import LoginPage from "../pages/login_page";
import DashboardPage from "../pages/dashboard_page";

describe("Verify the Login functionality", () => {


    it('Valid Login Test', () => {
        cy.visit('')
        const login_page = new LoginPage()
        login_page.enter_username('Admin')
        login_page.enter_password('admin123')
        login_page.click_on_login_btn()
        cy.wait(2000)
        const dashboard_page = new DashboardPage()
        dashboard_page.get_header_title().then(text => {
            expect(text).to.equal('Dashboard')
        })
    });

    it('Invalid Login Test', () => {
        let t1;
        cy.visit('')
        const login_page = new LoginPage()
        login_page.enter_username('Admlkdkjkdjkslkjdkin')
        login_page.enter_password('admindssf123')
        login_page.click_on_login_btn()
        cy.wait(2000)
        login_page.get_invalid_cred_msg().then(text => {
            expect(text).to.include('Invalid')
        })
        
    });

})