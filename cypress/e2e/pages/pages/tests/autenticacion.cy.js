import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMetodos } from "../common-page/common-page.metodos";
import { LoginData } from "../login/login.data";
import { LoginMetodos } from "../login/login.metodos";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticacion, ()=>{
    it("Inicio de sesion válido", () =>{

        Logger.stepNumber(1)
        Logger.step("Navegar a la pagina de inicio")
        CommonPageMetodos.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer click en Login de la barra de navegacion")
        CommonPageMetodos.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step("Ingresar un usuario y contraseña válidos")
        LoginMetodos.insertUsername(LoginData.validCredentials.username)
        LoginMetodos.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step("Hacer click en login para iniciar sesión")
        LoginMetodos.clickOnLoginButton();
        Logger.verification("Verificar que se redirige al usuario a la pagina de inicio")
        CommonPageMetodos.verifySignedUser(LoginData.validCredentials.username);

    })
})