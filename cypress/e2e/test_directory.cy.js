import LoginPage from "../pages/login_page";
import DashboardPage from "../pages/dashboard_page";
import DirectoryPage from "../pages/directory_page";

describe("Verify the Directory functionality", () => {
    it('Scroll till all the data is populated', () => {
        cy.visit('')
        const login_page = new LoginPage()
        login_page.do_login('Admin', 'admin123')
        cy.wait(2000)
        const dashboard_page = new DashboardPage()
        dashboard_page.click_on_directory_menu()
        const directory_page = new DirectoryPage()
        directory_page.scroll_inside_element()
        // cy.wait(5000)
    });


})
