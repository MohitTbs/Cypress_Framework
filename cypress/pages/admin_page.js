class AdminPage {
    pageElement = {
        username: "//label[text() = 'Username']/../following-sibling::div/input",
        user_role_element: "//div[@role='listbox']//div",
        user_role_down_button: "(//i[contains(@class,'bi-caret-down-fill')])[2]",
        status_down_button: "(//i[contains(@class,'bi-caret-down-fill')])[3]",
        status_element: "//div[@role='listbox']//div",
        employee_name_textbox: "//label[text()='Employee Name']/../following-sibling::div//input",
        search_button: "//button[normalize-space()='Search']",
        found_records: "//div[@class='orangehrm-paper-container']/div[2]/div/span",
        add_button: "//button[normalize-space()='Add']",
        trash_icons: "i.oxd-icon.bi-trash",
        yes_delete_button: "//button[normalize-space()='Yes, Delete']",
        delete_success_msg: "//p[text()='Successfully Deleted']"

    }

    enter_employee_name(emp_name){
        cy.xpath(this.pageElement.employee_name_textbox).type(emp_name)
    }

    enter_user_name(username){
        cy.xpath(this.pageElement.username).type(username)
    }

    click_on_user_role_down_btn() {
        cy.xpath(this.pageElement.user_role_down_button).click()
    }

    click_on_status_down_btn() {
        cy.xpath(this.pageElement.status_down_button).click()
    }

    select_user_role(role) {
        cy.xpath("//div[@role='listbox']//div").each(($ele, indexedDB, list) => {
            // cy.log($ele.text())
            if ($ele.text() === role) {
                cy.wrap($ele).click()
            }

        })
    }

    select_staus(status) {
        cy.xpath("//div[@role='listbox']//div").each(($ele, indexedDB, list) => {
            // cy.log($ele.text())
            if ($ele.text() === status) {
                cy.wrap($ele).click()
            }

        })
    }

    click_on_search_button(){
        cy.xpath(this.pageElement.search_button).click()
    }

    get_found_records(){
        return cy.xpath(this.pageElement.found_records).invoke('text')
    }

    click_on_add_button(){
        cy.xpath(this.pageElement.add_button).click()
    }

    click_on_trash_icon(){
        cy.get(this.pageElement.trash_icons).last().click()
    }

    click_on_yes_delete_button(){
        cy.xpath(this.pageElement.yes_delete_button).click()
    }

    get_delete_success_msg(){
        return cy.xpath(this.pageElement.delete_success_msg).invoke('text')
    }
}

module.exports = AdminPage