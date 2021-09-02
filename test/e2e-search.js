describe('E@E Tests - Search', () => {
    it('Should load homepage', () => {
        browser.url('http://zero.webappsecurity.com/')
        const searchbox = $('#searchTerm')
        searchbox.waitForExist()
    })
    it('Should submit searchbox', () => {
        // TODO
        const searchbox = $('#searchTerm')
        searchbox.setValue('bank')
        browser.keys('Enter')
        const searchResult = $('h2')
        searchResult.waitForExist()
        expect(searchResult).toHaveText('Search Results:')
    })
})