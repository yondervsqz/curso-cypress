import { CommonPageMetodos } from "../common-page/common-page.metodos";
import { ProductDetailsElements } from "./product-details.metodos";

export class ProductDetailsMetodos{
    static clickOnAddToCartButton(){
        ProductDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed(){
        ProductDetailsElements.buttons.addToCart.should("be.visible")
    }

    static verifyProductAddedMessage(){
        CommonPageMetodos.verifyAlert("Product added.")
    }
}