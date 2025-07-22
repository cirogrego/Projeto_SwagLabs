class LoginPage {
    selectorList() {
        const selector = {
            usernameField:"#user-name",
            passwordField:"#password",
            loginButton:"#login-button",
            errorMsg:"[data-test='error']",

         }

        return selector

    }

    accessLoginPage() {
        cy.visit('https://www.saucedemo.com/')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()

    }

    checkAccessInvalid() {
        cy.get(this.selectorList().errorMsg).contain('Epic sadface: Username and password do not match any user in this service')
    }


    
}

export default LoginPage