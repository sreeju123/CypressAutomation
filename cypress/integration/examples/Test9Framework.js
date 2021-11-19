import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/ProductPage"

describe('Framework Creation', function(){
before(function(){
// runs once before all tests in the block
cy.fixture('example').then(function(data)
{
 this.data = data
})
})



it('Framework Creation Test case',function(){

    //Create object for HomePage
const homePage=new HomePage()
const productPage=new ProductPage()

cy.visit(Cypress.env('url'))
homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)

// Validating two fields have same value
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
// Validating the kinlength of the field
homePage.getEditBox().should('have.attr','minlength',2)
// validating the radiobutton is disabled
homePage.getEnterRadioButton().should('be.disabled')

// CLicks the shop button
homePage.getShopTab().click()
// Iterate and click add button baed on the product
/*cy.get('h4.card-title').each(($e1,index,list)=>{
if($e1.text().includes('Blackberry')){
    cy.get('button.btn.btn-info').eq(index).click()
}
})
*/

// Instead of above hardcoded method, call reusable method from Commands.js
cy.selectProduct('Nokia Edge')

// To select specific product
// cy.selectProduct('Samsung Note 8')

// To select each product from array[productName] mentioned in the json file 
this.data.productName.forEach(function(element) {
    cy.debug()
    cy.selectProduct(element)
})

productPage.checkOutButton().click()
var sum=0;
// gets the total value of each product
cy.get('table.table.table-hover tbody tr td:nth-child(4) strong').each(($e1,index,list)=>{
    
    const amount=$e1.text()
    var productPrice=amount.split(" ")
    productPrice=productPrice[1].trim()
    sum=Number(sum)+Number(productPrice)
 // Since javscript asynchronous, before printing, we need to resolve promise   
}).then(function()
{
cy.log(sum)
})

cy.get("h3 strong").then(function(element){
   const amount= element.text()
   var productPrice=amount.split(" ")
    var total=productPrice[1].trim()
    // Aseerts the sum of each produvt with Total value of the product in Checkout page
    expect(Number(total)).to.equal(sum)
})

cy.contains('Checkout').click()
cy.get('#country').type("India")
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').click({force: true})
cy.get('input[type="submit"]').click()

// cy.get('.alert').should('have.value','Success! Thank you! Your order will be delivered in next few weeks :-).')

// using includes if entire text is not able to Assert
cy.get('.alert').then(function(element){
    const message=element.text()
    // Assertion- checks directly in the expect function
    expect(message.includes("Success")).to.be.true
})

})
})