import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMetodos } from "../common-page/common-page.metodos";
import { SignupMetodos } from "../signUp/signup.metodos";
import { Logger } from "../util/logger";

const user = CommonPageMetodos.generateRandomString();
const password = CommonPageMetodos.generateRandomString(7);

describe(CommonPageData.testSuites.registroYAutenticacion, ()=> {
    it("Registro de usuario válido", ()=> {
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMetodos.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer clic en Sign Up en la barra de navegaion")
        CommonPageMetodos.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step("Completar los compos obligatorios con la información válida")
        SignupMetodos.insertUsername(user)
        SignupMetodos.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Hacer click on Sign up para registrar al usuario")
        SignupMetodos.clickOnSignupButton();
        cy.wait(3000) 
        Logger.verification("Verificacion que se muestre el mensaje 'Sign up successful");
        SignupMetodos.verifySignupSuccessfulMessageIsDisplayed();

    })
});