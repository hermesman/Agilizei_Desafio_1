/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('User Login', () => {
    it('Should create an account successfully', () => {
        
        //Access
        cy.visit('index.php');        
        cy.get('a.login').click();
        cy.url().should('contains', '?controller=authentication&back=my-account');

        //Authentication
        cy.get('#email_create').type(chance.email());
        cy.get('#SubmitCreate').click();

        //Creating a new account
        cy.get('#id_gender1').check();
        cy.get('#customer_firstname').type(chance.first());
        cy.get('#customer_lastname').type(chance.last());
        cy.get('#passwd').type('test1234567890');
        cy.get('#address1').type(chance.address());
        cy.get('#city').type(chance.city());
        cy.get('#id_state').select('New York');
        cy.get('#postcode').type(chance.zip());
        cy.get('#phone_mobile').type(chance.phone({formatted: true}));
        cy.get('#alias').clear().type('My Home');
        cy.get('#submitAccount').click();

        //Assertion
        cy.get('p.info-account').should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.');
    });
});
