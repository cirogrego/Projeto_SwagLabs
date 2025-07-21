import userData from '..//fixtures/user-data.json'
import LoginPage from '..//pages/loginPage.js'

const loginPage = new LoginPage


describe('Projeto SwagLabs', () => {
   
  it('Login - Success', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.location('pathname').should('equal', '/inventory.html')
    cy.get('body').should('be.visible')
    cy.get('.header_label').contains('Swag Labs')
    
  })

  it('Login - Fail', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('wronguser')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })

  
})

