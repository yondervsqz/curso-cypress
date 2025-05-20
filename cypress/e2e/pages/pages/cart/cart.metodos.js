import { CommonPageMetodos } from "../common-page/common-page.metodos";
import { LoginMetodos } from "../login/login.metodos";
import { Logger } from "../util/logger";
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

    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            cy.wait(1000)
        })
    }

    static emptyCart(username, password){
        Logger.subStep("Navegar a demoblaze")
        CommonPageMetodos.navigateToDemoBlaze();
        Logger.subStep("Log out")
        CommonPageMetodos.logout();
        Logger.subStep("Click en home options")
        CommonPageMetodos.clickOnHomeOption();
        Logger.subStep("Click en log in")
        CommonPageMetodos.clickOnLoginOption();
        Logger.subStep("Loguearse con las credenciales")
        LoginMetodos.login(username, password)
        Logger.subStep("Click on cart")
        CommonPageMetodos.clickOnCartOption();
        Logger.subStep("Borrar los productos del carrito")
        this.deleteProducts();
    }
}