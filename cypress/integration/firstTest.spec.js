/// <reference types="Cypress" />
// describe('Mobile phone replenishment', () => {

//    context("Replenishment less than the allowed amount", () => {
//        it("Show error: Minimum amount of the repenishment 1 UAH", () => {});
//    });

// })

//Comment
//com2 

// it ('By ID', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// })

// it ('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/api/table-of-contents.html")
//     cy.get('.ds-input')
// })

// it ('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/api/table-of-contents.html")
//     cy.get('nav')
// })

// it ('By Tag Value', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[name="pass"]')
// })

// it ('By Different Tag', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"]')
// })

// it ('By Different Types', () => {
//     cy.visit("https://docs.cypress.io/api/api/table-of-contents.html")
//     cy.get('button[type="button"][title="close banner"]')
// })

// it.only ('By Contains name', () => {
//     cy.visit("https://next.privat24.ua/")
//     cy.get('*[class^="card"]')
// })

it ('Using Get with Find Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using Get with Find Eq', () => {
    cy.viewport(1920, 1080)
    cy.visit("https://docs.cypress.io/api/commands/siblings.html#Syntax")
    cy.get('aside').find('div').find('ol').find('li').find('a').eq('0')
});