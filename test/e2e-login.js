describe('E2E TESTS Login/Logout Flow', () => {

    it('Should not login with invalid credentials', () => {

        browser.url('http://zero.webappsecurity.com/')

        const sign_in_button = $('#signin_button')
        sign_in_button.waitForExist()
        sign_in_button.click()

        const login_form = $('#login_form')
        login_form.waitForExist()

        const username = $('#user_login')
        const password = $('#user_password')
        const sign_in = $('input[type="submit"]')
        username.setValue('invalid')
        password.setValue('invalid')
        sign_in.click()
        const error_message = $('.alert-error')
        expect(error_message).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {

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

    // it('Should logout from app', () => {

    //     const account_tab = $('.dropdown-toggle')
    //     account_tab.waitForExist()
    //     account_tab.click()
    //     const logout_button = $('//*[@id="settingsBox"]/ul/li[3]/ul/li[3]')
    //     logout_button.waitForExist()
    //     logout_button.click()
    //     const sign_in_button = $('#signin_button')
    //     sign_in_button.waitForExist()

    // })
})