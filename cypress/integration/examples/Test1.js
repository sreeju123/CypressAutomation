/// <reference types="Cypress" />



describe('My First Test Suite', function()
{

it('My First Test Case',function(){

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

    // assert if logo text dispalyed in correct
    cy.get(".brand").should("have.text","GREENKART")

    // this to print in logs
    cy.get(".brand").then(function(logoElement){
    cy.log(logoElement.text());
    })


})

})