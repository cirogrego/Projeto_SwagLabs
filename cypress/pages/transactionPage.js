class TransactionPage {
    selectorList() {
        const selector = {
            filterField:'[data-test="product-sort-container"]',
            shoppingCartLink:'[data-test="shopping-cart-link"]',
            shoppingCartBagde:'[data-test="shopping-cart-badge"]',
            cartAddButton:'#add-to-cart-sauce-labs-backpack',
            checkoutButton:'[data-test="checkout"]',
            firstNameField:'[data-test="firstName"]',
            lastNameField:'[data-test="lastName"]',
            postalCodeField:'[data-test="postalCode"]',
            continueButton:'[data-test="continue"]',
            checkoutOverviewPanel:'[data-test="title"]',
            finishButton:'[data-test="finish"]',
            checkoutCompletePanel:'[data-test="title"]',
            backHomeButton:'[data-test="back-to-products"]',
            removeButton:'[data-test="remove-sauce-labs-backpack"]',
            continueShoppingButton:'[data-test="continue-shopping"]',
            menuButton:'#react-burger-menu-btn',
            logoutButton:'[data-test="logout-sidebar-link"]',

        }

        return selector

    }

    fillTransactionPage(firstname, lastname, zipcode) {
        cy.get(this.selectorList().filterField).select('Price (low to high)')
        cy.get(this.selectorList().shoppingCartLink)
         cy.get(this.selectorList().cartAddButton).click()   
        cy.get(this.selectorList().shoppingCartBagde).contains('1').click()
        cy.get(this.selectorList().checkoutButton).click()
        cy.get(this.selectorList().firstNameField).type(firstname)
        cy.get(this.selectorList().lastNameField).type(lastname)
        cy.get(this.selectorList().postalCodeField).type(zipcode)
        cy.get(this.selectorList().continueButton).click()
        cy.get(this.selectorList().checkoutOverviewPanel).contains('Checkout: Overview')
        cy.get(this.selectorList().finishButton).click()
        cy.get(this.selectorList().checkoutCompletePanel).contains('Checkout: Complete!')
        cy.get(this.selectorList().backHomeButton).click()

    }
    
}    

export default TransactionPage