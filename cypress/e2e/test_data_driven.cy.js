import LoginPage from "../pages/login_page";
import DashboardPage from "../pages/dashboard_page";
import testdata from '../fixtures/testdata.json'

describe("Verify the Login functionality with data driven approach", () => {

    testdata.forEach((data) => {
        it('Invalid Login Test', () => {
            cy.visit('')
            const login_page = new LoginPage()
            login_page.enter_username(data.name)
            login_page.enter_password(data.age)
            login_page.click_on_login_btn()
            cy.wait(2000)
            login_page.get_invalid_cred_msg().then(text => {
                expect(text).to.include('Invalid')
            })
            
        });
    })

   

})