/// <reference types="Cypress" />



describe('Alert and chile tab Functionality', function()
{

it('Alert and chile tab Functionality Test Case',function(){

// Alerts
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
cy.get("#alertbtn").click()
cy.get("input[value='Confirm']").click()
// window:alert
cy.on("window:alert",(str)=>{
    //Mocha assertion
    expect(str).to.equal("Hello , share this practice page and share your knowledge")
})
// window:confirm
cy.on("window:confirm",(str)=>{
    //Mocha assertion
    expect(str).to.equal("Hello , Are you sure you want to confirm?")
})

// child tab handling- remove target Attribute
cy.get("#opentab").invoke('removeAttr','target').click()

cy.url().should("include","rahulshettyacademy")

cy.go("back")

})

})