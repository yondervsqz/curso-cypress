import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMetodos{

    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonPageData.url); 
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnAboutusOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }

    static clickOnSignupOption(){
        CommonPageElements.topMenu.signup.click();
    }

    static verifyAlert(expectedMessage){
        cy.on("Window:alert", (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }

    static generateRandomString(lenght=10){

        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLenght = characters.length;

        let counter = 0;
        while (counter < lenght) {
            result = characters.charAt(Math.floor(Math.random() * charactersLenght));
            counter += 1;
        }
        return result;

    }

    static verifySignedUser(username){
        CommonPageElements.signedUser.should('have.text', `Welcome ${username}`)
    }



}