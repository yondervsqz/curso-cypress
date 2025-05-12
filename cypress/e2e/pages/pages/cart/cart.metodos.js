import { CartElements } from "./cart.elemets";

export class CartMetodos{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }
}