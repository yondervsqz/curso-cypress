import { CommonPageMetodos } from "../common-page/common-page.metodos";
import { Logger } from "../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMetodos{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke("val", username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke("val", password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        Logger.subStep('Insertar username')
        this.insertUsername(username)
        Logger.subStep('Insertar password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessage(){
        CommonPageMetodos.verifyAlert('Wrong password.')
    }

}