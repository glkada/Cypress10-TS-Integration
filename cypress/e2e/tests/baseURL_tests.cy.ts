describe('example baseURL with no path testing', () => {
    before(() => {
        // cy.visit(Cypress.env('HOST'))
        cy.visit("https://www.browserstack.com/")
    })
    it('title should be correct', () => {
        cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
        // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
        cy.wait(5000);
    })

    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
    // it('title should be correct', () => {
    //     cy.title().should('equal', "Most Reliable App & Cross Browser Testing Platform | BrowserStack");
    //     // cy.title().should('equal', "Cross Browser Testing Tool. 3000+ Browsers, Mobile, Real IE.");
    //     cy.wait(5000);
    // })
})