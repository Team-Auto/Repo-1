// This is for IntelliSense:
/// <reference types="cypress" />  

// Should import the FILE where the CLASS is:
import SaucePage from '../support/Pages/SaucedemoPage.js'

// Should instantiate the CLASS:
const sp = new SaucePage()

describe('Saucedemo', ()=> {
    // HOOK to do before each test:
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com')
    })

    // Test
    it('Happy path backpack', ()=>{
    /*  Choose the user by number:    */
    sp.callUpSpecificUser(1)    
    /*  1- standard_user
        2- locked_out_user
        3- problem_user
        4- performance_glitch_user
        5- error_user
        6- visual_user 
    */
        
        sp.enterPassword()
        sp.logIn()
        sp.titleVisible()
        sp.titleContains('Products')

        sp.backpackCart()

        sp.goToCart()

        sp.titleContains('Your Cart')
        sp.itemsCart(1)

        sp.confirmItem('Backpack')
        sp.checkout()

        sp.typeFName('Keziah')
        sp.typeLName('Mason')
        sp.typePcode(6667)
        sp.dataNotEmpty()

        sp.continue()
        sp.finish()

        sp.titleContains('Complete')
    }) 
})