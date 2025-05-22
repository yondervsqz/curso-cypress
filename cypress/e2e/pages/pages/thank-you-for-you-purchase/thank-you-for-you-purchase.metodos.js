import { ThankYouForYourPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYourPurchaseMetodos{
    
    static clickOnOkButton(){
        cy.wait(1000)
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should('exist');
    }
}