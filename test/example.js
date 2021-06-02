describe('First Step with WebdriverIO', () => {
    it('Open Example Website', () => {
        browser.url('http://www.example.com')
        browser.pause(3000)
        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })
    
    it('H1 Should be Visisble',  () => {
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBePresent()
    })

    it('P Should be Visisble', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBePresent()
    })

    it('Check Link Value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText(text)

    })
})