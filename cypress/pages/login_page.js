class LoginPage {

    pageElements = {
        user_name_textbox: "//input[@name='username']",
        password_name_textbox: "//input[@name='password']",
        submit_button: "//button[@type='submit']",
        invalid_credentials_text: "//p[text()='Invalid credentials']"
    }

    enter_username(username) {
        cy.xpath(this.pageElements.user_name_textbox).type(username)
    }

    enter_password(password) {
        cy.xpath(this.pageElements.password_name_textbox).type(password)
    }

    click_on_login_btn() {
        cy.xpath(this.pageElements.submit_button).click()
    }

    get_invalid_cred_msg(){
        return cy.xpath(this.pageElements.invalid_credentials_text).invoke('text')
    }
}

module.exports = LoginPage;