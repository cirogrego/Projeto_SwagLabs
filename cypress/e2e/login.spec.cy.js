import userData from '..//fixtures/user-data.json'
import LoginPage from '..//pages/loginPage.js'
import DashboardPage from '..//pages/dashboardPage.js'


const loginPage = new LoginPage
const dashboardPage = new DashboardPage


describe('Projeto SwagLabs', () => {
   
  it('Login - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
   
    
  })

  it('Login - Fail', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  
})

