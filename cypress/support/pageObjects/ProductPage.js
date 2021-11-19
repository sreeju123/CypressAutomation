class ProductPage{

checkOutButton(){
    return cy.get(".nav-link.btn.btn-primary")
}

getProductList(){
    return cy.get('h4.card-title')
}


}

export default ProductPage;