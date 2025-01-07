import LoginPage from "../pages/login_page";
import DashboardPage from "../pages/dashboard_page";
import AdminPage from "../pages/admin_page"
import AddUserPage from "../pages/add_user_page"
const {generateRandomString} = require('../utilities/utils')

describe("Verify the Admin functionality", () => {
    it('Search a user', () => {
        cy.visit('')
        const login_page = new LoginPage()
        login_page.do_login('Admin', 'admin123')
        cy.wait(2000)
        const dashboard_page = new DashboardPage()
        dashboard_page.click_on_admin_menu()
        cy.wait(2000)
        const admin_page = new AdminPage()
        //admin_page.enter_user_name('airidas789')
        admin_page.click_on_user_role_down_btn()
        admin_page.select_user_role('Admin')
        // admin_page.enter_employee_name('airidas2 kikis2')
        admin_page.click_on_status_down_btn()
        admin_page.select_staus('Enabled')
        admin_page.click_on_search_button()
        admin_page.get_found_records().then(text => {
            let start_index = text.indexOf('(')
            let end_index = text.indexOf(')')
            let sub = text.substring(start_index + 1, end_index)
            expect(Number(sub)).to.be.greaterThan(0)
        })
    });


    it('Add a user', () => {
        cy.visit('')
        const login_page = new LoginPage()
        login_page.do_login('Admin', 'admin123')
        cy.wait(2000)
        const dashboard_page = new DashboardPage()
        dashboard_page.click_on_admin_menu()
        cy.wait(2000)
        const admin_page = new AdminPage()
        admin_page.click_on_add_button()
        const add_user_page = new AddUserPage()
        add_user_page.click_on_user_role_drp_dwn()
        add_user_page.select_user_role('Admin')
        add_user_page.enter_employee_name('a')
        add_user_page.click_on_status_drp_dwn()
        add_user_page.select_staus('Enabled')
        const userN = generateRandomString()
        add_user_page.enter_username(userN+'DumDumDummyUser')
        add_user_page.enter_password('DumDumDummyPassword123@##')
        add_user_page.enter_confirm_password('DumDumDummyPassword123@##')
        add_user_page.click_on_save_button()
        add_user_page.get_success_msg().then(text => {
            expect(text).equal('Successfully Saved')
        })
        cy.wait(5000)
    });

})


