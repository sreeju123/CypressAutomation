/// <reference types="Cypress" />



describe('New Window Functionality', function()
{

it('New Window Functionality Test Case',function(){


cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

// cross domain won't support(like Amazon.com to Flipkart.com), so removeAttr is used for that

cy.get("#opentab").then(function(e1){

    const url=e1.prop("href")
    cy.log(url)
    cy.visit(url)
})

})

})