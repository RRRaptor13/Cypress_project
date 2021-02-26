/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";

it('Replenishment of Unkraine mobile phone number', ()=> {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobileReplenishment.typePhoneNumber('686979712');
    basePage.typeAmount('1');
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    cy.wait(3000)
    basePage.submitPayment();
    mobileReplenishment.checkDebitCard('4552 **** **** 8217');
    mobileReplenishment.checkDebitAmount('1');
    mobileReplenishment.checkDebitAmountAndComission('2');
    mobileReplenishment.checkReceiverAmount('1');
    mobileReplenishment.checkPaymentCurrency('UAH');    
            
});

it('Money transfer between foreign cards', ()=> {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell');
    transfers.typeReceiverCard('5309233034765085');
    transfers.typeRecieverNameAndSurname('Juliana', 'Janssen');
    basePage.typeAmount('300');
    transfers.typeComment('Cypress test');       
    cy.wait(2000)
    basePage.submitPayment();
    transfers.checkDebitAndReceiverCards('* 8217', '* 5085');
    transfers.checkDebitAmountAndTotalAmount("300 UAH", "388.87");
    transfers.checkDebitComission("88.87 UAH");     
    transfers.checkTotalCurrency('UAH');
    transfers.CheckComment('Cypress test');
             
});