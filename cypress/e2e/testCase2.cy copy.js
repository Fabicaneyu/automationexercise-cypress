;/// <reference types="cypress" />

describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })
    it('Test Case 2: Login User with correct email and password', () => {
        //home 
        cy.contains('AutomationExercise').should('be.visible');  
        cy.contains('a', 'Signup / Login').click();
        //página começo de cadastro coleta nome e email
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Fabi Canedo');
        cy.get('[data-qa="signup-email"]').type('testing@email.com.br');
        cy.contains('button', 'Signup').click();
        //página cadastro completo (nome e email já devem vir preenchidos)
        cy.contains(':nth-child(1) > b', 'Enter Account Information').should('be.visible');
        cy.get('#id_gender2').should("exist");
        cy.get('#id_gender2').click();
        cy.get('[data-qa="password"]').type('123456');
        cy.get('[data-qa="days"]').select(1);
        cy.get('[data-qa="months"]').select(1);
        cy.get('[data-qa="years"]').select("2000");
        cy.get('#newsletter').should("exist");
        cy.get('#newsletter').click();
        cy.get('#optin').should("exist");
        cy.get('#optin').click();
        cy.get('[data-qa="first_name"]').type('Fabi');
        cy.get('[data-qa="last_name"]').type('Canedo');
        cy.get('[data-qa="company"]').type('NTT DATA');
        cy.get('[data-qa="address"]').type('Rua São Paulo, 1');
        cy.get('[data-qa="address2"]').type('Rua São Paulo, 2');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('São Paulo');
        cy.get('[data-qa="city"]').type('São Paulo');
        cy.get('[data-qa="zipcode"]').type('11111111');
        cy.get('[data-qa="mobile_number"]').type('119811111');
        cy.contains('button', 'Create Account').click();
        // area logada após criar conta
        cy.contains('Account Created!').should('be.visible');
        cy.contains('a', 'Continue').click();
        cy.contains('Logged in as').should('be.visible');
       
      })

})


//5. Verify 'Login to your account' is visible
//6. Enter correct email address and password
//7. Click 'login' button
//8. Verify that 'Logged in as username' is visible
//9. Click 'Delete Account' button
//10. Verify that 'ACCOUNT DELETED!' is visible