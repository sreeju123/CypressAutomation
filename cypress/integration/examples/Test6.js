/// <reference types="Cypress" />



describe('Mouse Hover Functionality', function()
{

it('Mouse Hover Functionality Test Case',function(){


cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

cy.get(".mouse-hover-content").invoke("show");
cy.contains("Top").click();
cy.url().should("include","top");

// or
// cy.contains("Top").click({force: true});

})

})