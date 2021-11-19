/// <reference types="Cypress" />



describe('My First Test Suite', function()
{

it('My First Test Case',function(){

// check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1");
cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
cy.get("input[type='checkbox']").check(["option2","option3"])


// Static dropdowns
cy.get("select").select("option2").should("have.value","option2")

// Dynamic dropdowns
cy.get("#autocomplete").type("IND")
cy.get(".ui-menu-item div").each(($e1,index,$list) =>{
if($e1.text()=="India")
{
    $e1.click();
}
})
// Assertion to check dropdown value
cy.get("#autocomplete").should("have.value","India")

// Editbox is visible or not
cy.get("#displayed-text").should("be.visible")
cy.get("#hide-textbox").click()
cy.get("#displayed-text").should("not.be.visible")
cy.get("#show-textbox").click()
cy.get("#displayed-text").should("be.visible")

// Radio Button
cy.get("input[value='radio2']").check().should("be.checked")


})

})