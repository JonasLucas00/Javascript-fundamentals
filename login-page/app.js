class LoginPage {
    manager() {
        let form = document.querySelector('.login-form');

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let email = document.querySelector('.user-email');

            console.log(email.value)
        })

    }
}

let Login = new LoginPage()
Login.manager()