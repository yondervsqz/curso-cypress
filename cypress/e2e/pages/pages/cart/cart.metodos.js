import { CartElements } from "./cart.elemets";

export class CartMetodos{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should("be.visible")
    }

    static verifyCartPageIsShown(){
        cy.url().should("include", "cart.html")
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click()
    }
}