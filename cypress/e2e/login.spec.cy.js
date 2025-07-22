import userData from '..//fixtures/user-data.json'
import LoginPage from '..//pages/loginPage.js'
import DashboardPage from '..//pages/dashboardPage.js'
import TransactionPage from '..//pages/transactionPage.js'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const transactionPage = new TransactionPage


describe('Projeto SwagLabs', () => {
   
  it.only('Login - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    transactionPage.fillTransactionPage(userData.newUser.firstname,userData.newUser.lastname,userData.newUser.zipcode)
    
    //cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    //cy.get('[data-test="continue-shopping"]').click
    
    
  })

  it('Login - Fail', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  
})

