describe('Tutorialspoint', function () {
    // test case
    it('Scenario 1', function (){
        // url launch
        cy.visit("https://www.etsy.com")
        // delete target attribute with invoke for link
        cy.contains('Sign in').click().wait(2000)
       cy.contains('Continue with Google').invoke('removeAttr','target').click()
        // verify child window url
        cy.url()
        .should('include', 'accounts.google.com')
        // shift to parent window
        cy.go('back');
     });

    //     it('opens a new window', () => {
    //         cy.visit('https://www.etsy.com/', {
    //           onBeforeLoad (win) {
    //             cy.stub(win, 'open').as('open')
    //           }
    //         })
    //         // triggers the application to call window.open
    //         cy.contains('Sign in').click().wait(2000)
    //    cy.contains('Continue with Google').invoke('removeAttr','target').click()
    //    cy.log('@open')
    //         //cy.get('@open').should('have.been.calledOnce')
    //       })
   
        
      
         
   
    //     // triggers the application to call window.open
    //     cy.get('button').click('Open new window')
    //     cy.get('@open').should('have.been.calledOnce')

    //    cy.url()
    //    .should('include', 'https://accounts.google.com')
       
    });

   
