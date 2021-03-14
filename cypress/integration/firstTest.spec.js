/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";

it.skip('Replenishment of Unkraine mobile phone number', () => {
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

it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        })
})

it('Example sending the POST request', () => {

    const requestBody = {
        "action": "info",
        "phone": "+380686979712",
        "amount": 50,
        "currency": "UAH",
        "cardCvv": "111",
        "card": "4552331448138217",
        "cardExp": "0526",
        "xref": "9a93f33d5f1c0be7ab2076e93798865b",
        "_": 1615649308465
    }

    const headersData = {
        cookie: 
        'cookie: pubkey=6283a71fa6923901d1296034031a8c95; fp=5; lfp=3/7/2021, 3:39:53 PM; pa=1615706716181.67290.2800183958364797next.privat24.ua0.18593809216290946+1'
    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    }).then((response) => {
        console.log(response.body);
    })
})