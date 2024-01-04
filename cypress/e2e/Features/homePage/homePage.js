import {Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps';
import { homePage } from '../../../../pages/homePage';


Given("Dado que Ingresé al portal web www.bg.com.bo", ()=> {
    cy.visit('/');
    cy.url().should('contains','personas')
    homePage.closePopUp()
})

When("Cuando Ingreso al menú Negocios|Menu hamburguesa|GanaMóvil Empresas",()=> {
    homePage.selectMenu('GanaMóvil Empresas')
})

And("Y busco los datos de contacto",()=> {
    homePage.clickOnTutorialButton('Tutoriales');
    cy.url().should('contains','canales-digitales/ganamovil-empresas/')
})

Then("Entonces obtengo un listado con el",(dataTable)=> {
    dataTable.hashes().forEach(({Contacto, Data}) => {
        homePage.ValidateContactoList(Contacto).then(({pageData})=> {
            // Asercion para validar de que cada tipo de contacto tenga el valor correspondiente
            // 'Data' es el valor de la tabla de homePage.feature y 'pageData' es el texto que se extrae de la pagina web
            expect(Data).to.contain(pageData);
        })
    });
})