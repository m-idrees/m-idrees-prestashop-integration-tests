import Order from '../PageObjects/objects'

describe('Presta 1.6', function () {

    it('TC#1: E-Commerce - Complete flow', function () {
        const ord = new Order()
        ord.clrcookies()
        ord.visit()
        ord.addproduct()
        ord.checkout()
    })

    it('TC#2: E-Commerce - Modify cart', function () {
        const ord = new Order()
        ord.clrcookies()
        ord.visit()
        ord.addproduct()
        ord.modify_cart()
        ord.checkout()
    })

    it('TC#3: E-Commerce - Sign Up', function () {
        const ord = new Order()
        ord.clrcookies()
        ord.visit()
        ord.sign_up()
    })

    it('TC#4: E-Commerce - Sign In Validations', function () {
        const ord = new Order()
        ord.clrcookies()
        ord.visit()
        ord.norm_login_validations()
    })

    it('TC#5: E-Commerce - Cart Modify', function () {
        const ord = new Order()
        ord.clrcookies()
        ord.visit()
        ord.addproduct()
    })

    // it('TC#4: E-Commerce complete flow', function () {
    //     const ord = new Order()
    //     ord.clrcookies()
    //     cy.visit('https://www.etsy.com/')
    //     cy.contains('Sign in').click().wait(2000)
    //     cy.contains('Continue with Google').click()
        
    // })
})
