import { CommonPageMetodos } from "../common-page/common-page.metodos";
import { SignupElements } from "./signup.elements";

export class SignupMetodos{

    static insertUsername(username){
        SignupElements.textboxes.username.invoke("val", username)
    }

    static insertPassword(password){
        SignupElements.textboxes.password.invoke("val", password)
    }

    static clickOnSignupButton(){
        SignupElements.buttons.signup.click();
    }

    static signup(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignupButton();
    }

    static verifySignupSuccessfulMessageIsDisplayed(){
        CommonPageMetodos.verifyAlert("Sign up successful.");
    }

}