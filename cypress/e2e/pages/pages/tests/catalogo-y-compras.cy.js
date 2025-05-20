import { CartMetodos } from "../cart/cart.metodos";
import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMetodos } from "../common-page/common-page.metodos";
import { HomeMetodos } from "../home/home.metodos";
import { LoginData } from "../login/login.data";
import { LoginMetodos } from "../login/login.metodos";
import { ProductDetailsMetodos } from "../product-details/product-details.metodos";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = "ASUS Full HD"

describe(CommonPageData.testSuites.catalogoYCompras, ()=>{
    it('Navegación por categorias', ()=>{

        Logger.stepNumber(1)
        Logger.step("Iniciar sesion como usuario registrado")
        Logger.subStep("Navegar a Demoblaze")
        CommonPageMetodos.navigateToDemoBlaze();
        Logger.subStep("Clic on Login link")
        CommonPageMetodos.clickOnLoginOption();
        LoginMetodos.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step("Navegar a la pagina de inicio")
        CommonPageMetodos.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step("Seleccionar una categoria de productos en el menú de navegacion")
        HomeMetodos.clickOnMonitorsOption();
        Logger.verification("Verificar que se muestre la lista de productos correspondientes a la categoria seleccionada")
        HomeMetodos.verifyProductDisplayed("Apple monitor 24")
        HomeMetodos.verifyProductDisplayed("ASUS Full HD")

    })

    it('Agregar producto al carrito', ()=>{

        Logger.stepNumber(1)
        Logger.step("Iniciar sesion como usuario registrado")
        Logger.subStep("Navegar a Demoblaze")
        CommonPageMetodos.navigateToDemoBlaze();
        Logger.subStep("Clic on Login link")
        CommonPageMetodos.clickOnLoginOption();
        LoginMetodos.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step("Navegar a la pagina de inicio")
        CommonPageMetodos.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step("Seleccionar una categoria de productos en el menú de navegacion")
        HomeMetodos.clickOnMonitorsOption();
        
        Logger.stepNumber(4)
        Logger.step("Hacer clic en un producto especifico")
        HomeMetodos.clickOnProductLink(product)
        
        Logger.step(5)
        Logger.verification("Verificar que se muestra la pagina de detalles del producto")
        ProductDetailsMetodos.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step("Hacer clic en el boton 'Add to cart'")
        ProductDetailsMetodos.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification("Verificar que se muestra un mensaje de verificacion")
        ProductDetailsMetodos.verifyProductAddedMessage();
        CommonPageMetodos.clickOnCartOption();
        CartMetodos.verifyProductAdded(product)


    })

    
})