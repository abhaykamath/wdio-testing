describe('First Steps with WebdriverIO', () => {
    it('Load YouTube Website', () => {
        browser.url('http://example.com/')
        browser.pause(5000);
    })

    it('Validate site Title', () => {
        expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 Should be present', () => {
        // Get selector and save to a variable
        const h1 = $('h1')
        // Do assertion
        expect(h1).toBePresent()

    })

    it('P tag should be present', () => {
        const p = $('p')
        expect(p).toBePresent()
    })

    it('Check link value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })
})
