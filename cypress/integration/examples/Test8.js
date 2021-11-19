/// <reference types="Cypress" />

/**
 * Below reference is for iframes auto suggestions
 */
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('IFrames Functionality', function()
{

it('IFrames Functionality Test Case',function(){


cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

cy.frameLoaded("#courses-iframe")
cy.iframe().find("a[href='#/mentorship']").eq(0).click()
cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)

})

})