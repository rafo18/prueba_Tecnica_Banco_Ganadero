class HomePage {
    get = {
        closePopUpButton: ()=> cy.get('[data-headlessui-state = open] svg'),
        negociosButton: ()=> cy.contains('Negocios'),
        burgerButton: ()=> cy.get('[id = menu-superior] button[class*=item]'),
        navButton: (element)=> cy.get('main nav').contains(element),
        contactoList: ()=> cy.get('[role=list]').eq(2),
        horariosList: ()=> cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .flex > .text-sm')
    }

    closePopUp(){
        this.get.closePopUpButton().click()
    }

    selectMenu(element){
        this.get.negociosButton().click();
        cy.wait(500);
        this.get.burgerButton().click();
        cy.contains(element).click();
    };

    clickOnTutorialButton(element){
        this.get.navButton(element).click();
    };

    ValidateContactoList(data){
        let pageData, pageContacto
          return cy.get('*').then( ()=> {
            if (data !== 'Horarios') {
                this.get.contactoList().contains(data).then( data => {
                     pageContacto = data.text();
                });
                this.get.contactoList().contains(data).siblings().then( (data)=> {
                     pageData = data.text();
                });
            } else {
            this.get.horariosList().children().then(data => {
                pageData = data.text().slice(10);   
            })
            }
          }).then( () => {
            return {
                pageData,
                pageContacto
            }
          })
    };
}

export const homePage = new HomePage();