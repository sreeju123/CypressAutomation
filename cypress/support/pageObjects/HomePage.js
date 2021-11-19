class HomePage{

    getEditBox(){
        return cy.get("body > app-root > form-comp > div > form > div:nth-child(1) > input")
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){
    return cy.get("select")
    }

    getEnterRadioButton(){
    return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}

// to make this class available to all other files in framework
export default HomePage;