import {mobile, tablet, desktop } from '../lib/devices'

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

    it('Change Browser Viewport', () => {
        browser.setWindowSize(800, 600)
        browser.pause(1000)
    })

    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(2000)
    })

    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(2000)
    })

    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(2000)
    })
})