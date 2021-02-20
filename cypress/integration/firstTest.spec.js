/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers";

it.only('Replenishment of Unkraine mobile phone number', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('686979712');
    mobileReplenishment.typeAmount('1');
    mobileReplenishment.typeDebitCardData('4552331448138217', '0524', '111');
    cy.wait(3000)
    mobileReplenishment.submitPayment();
    mobileReplenishment.checkDebitCard('4552 **** **** 8217');
    mobileReplenishment.checkDebitAmount('1');
    mobileReplenishment.checkDebitAmountAndComission('2');
    mobileReplenishment.checkReceiverAmount('1');
    mobileReplenishment.checkPaymentCurrency('UAH');    
            
});

it('Money transfer between foreign cards', ()=> {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

    transfers.typeDebitCardData('4552331448138217', '0524', '111');
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell');
    transfers.typeReceiverCard('5309233034765085');
    transfers.typeRecieverNameAndSurname('Juliana', 'Janssen');
    transfers.typeAmount('300');
    transfers.typeComment('Cypress test');       
    cy.wait(2000)
    transfers.submitPayment();
    transfers.checkDebitAndReceiverCards('* 8217', '* 5085');
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '388.40');
    transfers.checkDebitAmountAndTotalAmount('88.40 UAH');     
    transfers.checkTotalCurrency('UAH');
    transfers.CheckComment('Cypress test');
       
       
});