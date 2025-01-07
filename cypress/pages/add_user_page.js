/// <reference types="cypress" />


class AddUserPage {

    pageElement = {
        user_role_drp_dwn: "//label[text()='User Role']/../following-sibling::div/div/div/div[2]",
        employee_name: "//label[text()='Employee Name']/../following-sibling::div//input",
        suggested_emp_name: "//div[@role='listbox']/div/span",
        user_role_element: "//div[@role='listbox']//div",
        status_down_button: "(//i[contains(@class,'bi-caret-down-fill')])[3]",
        status_element: "//div[@role='listbox']//div",
        username_text_box: "//label[text()='Username']/../following-sibling::div//input",
        password_text_box: "(//input[@type='password'])[1]",
        confirm_password_text_box: "(//input[@type='password'])[2]",
        save_button: "//button[@type='submit']",
        success_msg: "//p[text()='Successfully Saved']",
    }


    click_on_user_role_drp_dwn() {
        cy.xpath(this.pageElement.user_role_drp_dwn).click()
    }

    select_user_role(role_type) {
        cy.xpath(this.pageElement.user_role_element).each(($ele, index, list) => {
            if ($ele.text() == role_type) {
                cy.wrap($ele).click()
            }

        })
    }

    enter_employee_name(substring) {
        cy.xpath(this.pageElement.employee_name).type(substring)
        cy.xpath(this.pageElement.suggested_emp_name).each(($ele, index, list) => {
            cy.wrap($ele).eq(0).click()
           return false //In order to break the .each
        })
    }

    click_on_status_drp_dwn(){
        cy.xpath(this.pageElement.status_down_button).click()
    }

    select_staus(status) {
        cy.xpath(this.pageElement.status_element).each(($ele, indexedDB, list) => {
            // cy.log($ele.text())
            if ($ele.text() === status) {
                cy.wrap($ele).click()
                return false //In order to break the .each
            }

        })
    }

    enter_username(username){
        cy.xpath(this.pageElement.username_text_box).type(username)
    }

    enter_password(password){
        cy.xpath(this.pageElement.password_text_box).type(password)
    }

    enter_confirm_password(cPassword){
        cy.xpath(this.pageElement.confirm_password_text_box).type(cPassword)
    }

    click_on_save_button(){
        cy.xpath(this.pageElement.save_button).click()
    }

    get_success_msg(){
        return cy.xpath(this.pageElement.success_msg).invoke('text')   
    }
}



module.exports = AddUserPage