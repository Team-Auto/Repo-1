
 

// Create VARIABLES with short names where we store each LOCATOR. 
// Group the VARIABLES in a JSON ELEMENT:
var log = {
    user: '#user-name',
    pass: '#password',
    login: '#login-button'
}
var cart = {
    link: '.shopping_cart_link',
    item: '.inventory_item_name',
    backpack: '#add-to-cart-sauce-labs-backpack',
    tshirt: '#add-to-cart-sauce-labs-bolt-t-shirt',
    onesie: '#add-to-cart-sauce-labs-onesie',
    light: '#add-to-cart-sauce-labs-bike-light',
    jacket: '#add-to-cart-sauce-labs-fleece-jacket',
    redShirt: '#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)',
    total: '.cart_item'
}
var data = {
    fname: '#first-name',
    lname: '#last-name',
    pcode: '#postal-code'
}
var button = {
    checkout: '#checkout',
    continue: '#continue',
    finish: '#finish'
}
var assert = {
    title: '.title'
}

// For the RANDOM USER:
        // Create an ARRAY and put the user names inside:
        var users = ['standard_user',
            'locked_out_user',
            'problem_user',
            'performance_glitch_user',
            'error_user',
            'visual_user'];
        // Create a VARIABLE that stores one user selected by the RANDOM METHOD:    
        var user1 = users[Math.floor(Math.random() * users.length)]

// Create METHODS that perform actions on the page, like targeting specific elements or clicking.
// Group the METHODS in a CLASS:
class SaucePage {    

    // Login
    callUpSpecificUser(id) {return cy.get(log.user).type(users[id-1])}
    enterPassword() {return cy.get(log.pass).type('secret_sauce')}
    logIn() {return cy.get(log.login).click()}

    // Random user
    callUpRandomUser() {
        return cy.get(log.user).type(user1)}    

    // Products in the cart
    goToCart() {return cy.get(cart.link).click()}
    backpackCart() {return cy.get(cart.backpack).click()}
    tshirtCart() {return cy.get(cart.tshirt).click()}
    onesieCart() {return cy.get(cart.onesie).click()}
    lightCart() {return cy.get(cart.light).click()}
    jacketCart() {return cy.get(cart.jacket).click()}
    redShirtCart() {return cy.get(cart.redShirt).click()}
    confirmItem(it) {return cy.get(cart.item).should('contain', it)}
    itemsCart(n) {return cy.get(cart.total).should('have.length', n)}

    // Complete personal data
    typeFName(name) {return cy.get(data.fname).type(name)}
    typeLName(lastname) {return cy.get(data.lname).type(lastname)}
    typePcode(code) {return cy.get(data.pcode).type(code)}

    // Assert data fields are not empty
    dataNotEmpty() {return cy.get(data.fname).invoke('val').should('not.be.empty') && 
        cy.get(data.lname).invoke('val').should('not.be.empty') &&
        cy.get(data.pcode).invoke('val').should('not.be.empty')}

    // Buttons
    checkout() {return cy.get(button.checkout).click()}
    continue() {return cy.get(button.continue).click()}
    finish() {return cy.get(button.finish).click()}

    // Assert titles contain certain words
    titleContains(text) {return cy.get(assert.title).should('contain', text)}

    // Assert title is visible
    titleVisible() {return cy.get(assert.title).should('be.visible')}
    
}

export default SaucePage