class DashboardPage {
    selectorList() {
        const selector = {
            
            dashboardPanel:'body',
            dashboardHeader:'.header_label',
            
        }

        return selector
    }

    checkDashboardPage() {
            cy.location('pathname').should('equal', '/inventory.html')
            cy.get(this.selectorList().dashboardPanel).should('be.visible')
            cy.get(this.selectorList().dashboardHeader).contains('Swag Labs')
    }


    }

    export default DashboardPage
