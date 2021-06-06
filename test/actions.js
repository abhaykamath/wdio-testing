describe('Browser Actions', () => {

    it('Inputs', () => {
        browser.url('http://www.google.com')
        const google_search_bar = $('[name="q"]')
        google_search_bar.waitForExist()
        google_search_bar.setValue('Xbox') // Clears and enters
        browser.pause(2000)
        google_search_bar.addValue(' Series S') // Appends
        browser.pause(2000)
        // google_search_bar.clearValue() // Clears the value
        // browser.pause(2000)
    })

    it('Click', () => {
        const google_search_button = $('[name="btnK"]')
        google_search_button.waitForExist()
        google_search_button.click()
        //google_search_button.doubleClick()
    })

    
})