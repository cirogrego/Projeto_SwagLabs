import userData from '..//fixtures/user-data.json'
import LoginPage from '..//pages/loginPage.js'
import DashboardPage from '..//pages/dashboardPage.js'
import TransactionPage from '..//pages/transactionPage.js'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const transactionPage = new TransactionPage


describe('Projeto SwagLabs', () => {
   
  it('Transaction - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    transactionPage.fillTransactionPage(userData.newUser.firstname,userData.newUser.lastname,userData.newUser.zipcode)
    transactionPage.cancelTransactionPage()
  })
    
    
  })
