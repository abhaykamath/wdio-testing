describe('E2E Tests - Currency Exchange', () => {
    it('Should login into the application', () => {

        browser.url('http://zero.webappsecurity.com/')
        const sign_in_button = $('#signin_button')
        sign_in_button.waitForExist()
        sign_in_button.click()
        const login_form = $('#login_form')
        login_form.waitForExist()
        const username = $('#user_login')
        const password = $('#user_password')
        const sign_in = $('input[type="submit"]')
        username.setValue('username')
        password.setValue('password')
        sign_in.click()
        const nav_tab = $('.nav-tabs')
        nav_tab.waitForExist()
    })
    
    it('', () => {

    })
})