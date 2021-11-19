/// <reference types="Cypress" />



describe('My Second Test Suite', function()
{

it('My Second Test Case',function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get("input[type='search']").type("ca");
    cy.wait(2000);
    cy.get(".product").should('have.length',5);
    cy.get(".product:visible").should('have.length',4);
    // Parent child chaining
    cy.get(".products").as("productLocator")
    cy.get("@productLocator").find(".product").should("have.length",4);
    cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click().then(function(){
        console.log("----Info----")
    })
    
    cy.get(".products").find(".product").each(($e1,index,$list)=>
    {
    const textVeg= $e1.find("h4.product-name").text();
    if(textVeg.includes("Cashews")){
        $e1.find("button").click()
    }
    })

 cy.get(".cart-icon > img").click();
 cy.contains("PROCEED TO CHECKOUT").click();
 cy.contains("Place Order").click();

})

})