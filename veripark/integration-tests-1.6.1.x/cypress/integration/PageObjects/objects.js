require('cypress-xpath')

class Order {
    clrcookies() {
        cy.clearCookies()
    }
    visit() {
        cy.fixture('config').then((url) => {
            cy.visit(url.shopURL)

        })
    }

    addproduct() {
        cy.get('[alt="Faded Short Sleeve T-shirts"]').first().click()
        cy.get('.exclusive > span').click().wait(7000)
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#SubmitLogin > span').click()
        cy.fixture('config').then((crd) => {
            cy.get('#email').clear().type(crd.Username)
            cy.get('#passwd').clear().type(crd.Pass)
            cy.get('#SubmitLogin > span').click()
        })
    }

    modify_cart() {
        cy.get('.logo').click()
        cy.get('[title="View my shopping cart"]').click()
        cy.get('.icon-trash').click().wait(3000)
        cy.get('.logo').click().wait(5000)
        cy.get('.logo').click().wait(5000)
        cy.get('[alt="Faded Short Sleeve T-shirts"]').first().click()
        cy.get('.exclusive > span').click().wait(7000)
        cy.get('.continue > span').click()
        cy.get('.logo').click()
        cy.get('[alt="Blouse"]').first().click()
        cy.get('.icon-plus').click()
        cy.get('#group_1').select('M')
        cy.get('#color_8').click()
        cy.get('.exclusive > span').click().wait(7000)
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
    }

    checkout() {
        cy.get('.cart_navigation > .button > span').click()
        cy.get('label').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.cheque-indent > .dark').should('include.text', 'Your order on My Store is complete.')
        cy.get('body').then(($body) => {
            if ($body.text().includes('Your order on My Store is complete.')) {
                cy.log('test has been passed')
            }
            else {
                cy.log('test has been failed')
            }
        })
    }

    sign_up() {
        cy.get('.login').click()
        //submit empty email
        cy.get('#SubmitCreate > span').click().wait(7000)
        cy.get('ol > li').should('have.text', 'Invalid email address.')
        function generateNewUsername() {
            let text = "";
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

            for (let i = 0; i < 10; i++)
                text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
            return text;

        }
        const generatedUsername = generateNewUsername()
        cy.get('#email_create').type(generatedUsername + '@example.com')
        cy.get('#SubmitCreate > span').click().wait(7000)
        cy.get('#id_gender1').click()
        cy.fixture('config').then((crd) => {
            cy.get('#customer_firstname').type(crd.fname)
            cy.get('#customer_lastname').type(crd.lname)
            cy.get('#days').select('1')
            cy.get('#months').select('January')
            cy.get('#years').select('1994')
            cy.get('#submitAccount > span').click()
            cy.get('.alert > p').should('include.text', 'error')
            cy.get('#passwd').type(crd.Pass)
            cy.get('#city').type('Islamabad')
            cy.get('#address1').type('House # 123, St # A1, Islamabad')
            cy.get('#id_state').select('Alabama')
            cy.get('#postcode').type('00000')
            cy.get('#phone').type('1231231231')
            cy.get('#submitAccount > span').click().wait(5000)
            cy.get('.info-account').should('include.text', 'Welcome to your account.')
        })
    }

    norm_login_validations() {
        cy.fixture('config').then((crd) => {
            cy.get('.login').click().wait(2000)
            //assert credentials are entered in login form
            cy.get('#SubmitLogin > span').click()
            cy.get('ol > li').should('have.text', 'An email address required.')
            //assert password is entered in login form
            cy.fixture('config').then((crd) => {
                cy.get('#email').type(crd.Username)
                cy.get('#SubmitLogin > span').click()
                cy.get('ol > li').should('have.text', 'Password is required.')
                //assert email is entered in login form
                cy.get('#email').clear()
                cy.get('#passwd').type(crd.Pass)
                cy.get('#SubmitLogin > span').click()
                cy.get('ol > li').should('have.text', 'An email address required.')
                // //assert login success
                cy.get('#email').clear().type(crd.Username)
                cy.get('#passwd').clear().type(crd.Pass)
                cy.get('#SubmitLogin > span').click()
                cy.get('.info-account').should('include.text', 'Welcome to your account.')
            })
        })
    }
}
export default Order