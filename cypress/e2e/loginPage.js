class loginPage {
    constructor() {
        this.url = "https://www.edu.goit.global/account/login";
        this.emailInput = '#user_email'
        this.passwordInput = 'input[type=password'
        this.loginButton = 'button[type="submit"]'
        this.menuMobile = '#open-navigation-menu-mobile'
        this.logOutButton = ':nth-child(9) > .next-bve2vl'

    }

    visit() {
        cy.visit(this.url);
    }

    loginUser(email,password) {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    logout() {
        cy.get(this.menuMobile).click()
        cy.get(this.logOutButton).click()
    }
}

export default new loginPage();