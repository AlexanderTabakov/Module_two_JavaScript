"use strict";

let view = 'reg';

function signUp () {
    const emailIsvalid = validateEmail();
    const passwordIsvalid = validatePassword();
    const checkboxIsValid = validateCheckbox();

    if (emailIsvalid && passwordIsvalid && checkboxIsValid) {
        const email = document.querySelector('#reg-email').value;
        const password = document.querySelector('#reg-password').value;

        const user = {email, password};

        const users = JSON.parse(localStorage.getItem('user')) || [];
        if (!users.find(({email}) => user.email === email)) {
            users.push(user)
            localStorage.setItem('user', JSON.stringify(users))
        } else alert('Такой пользователь уже существует')
    }
}

function signIn() {
    const emailIsvalid = validateEmail();
    const passwordIsvalid = validatePassword();

    if (emailIsvalid && passwordIsvalid) {
        const email = document.querySelector('#auth-email').value;
        const password = document.querySelector('#auth-password').value;

        const users = JSON.parse(localStorage.getItem('user')) || [];
        if (users.find(user => user.email === email && user.password === password)) {
            alert('Вы вошли')
            document.location.href = './page.html'
        } else alert('Ошибка Авторизациии')

    }

}

function isEmpty(inputElement, errorBox) {

    if (inputElement.value.length === 0) {

        toggleErrorMessage(inputElement, errorBox, 'Поле обязательно для заполнения');

        return true;

    } else { toggleErrorMessage(inputElement, errorBox)

        return false

    }
}

function toggleErrorMessage(inputElement, errorBox, errorMessage) {
    if (errorMessage) {
        inputElement.classList.add('error-box');
        errorBox.textContent = errorMessage;
        errorBox.style.display = 'block'
    } else {
        inputElement.classList.remove('error-box');
        errorBox.style.display = 'none'
    }
}

function validateEmail() {
    const emailElement = document.querySelector(`#${view}-email`);
    const emailErrorBox = document.querySelector(`#${view}-email-error-box`);

    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!isEmpty(emailElement, emailErrorBox)) {
        if (emailRegExp.test(emailElement.value)) {
            toggleErrorMessage(emailElement, emailErrorBox);

            return true;
        } else {
            toggleErrorMessage(emailElement, emailErrorBox, 'Некорректный Email')
        }
    }
    return false

}

function validatePassword () {
    const passwordElement = document.querySelector(`#${view}-password`);
    const passwordErrorBox = document.querySelector(`#${view}-password-error-box`);

    if (!isEmpty(passwordElement, passwordErrorBox)) {
        if (passwordElement.value.length >= 8) {
            toggleErrorMessage(passwordElement, passwordErrorBox);

            return true;
        } else {
            toggleErrorMessage(passwordElement, passwordErrorBox, "Пароль должен содержать минимум 8 символов");
        }
    }

    return false;
}

function validateCheckbox() {
    const checkboxElement = document.querySelector('#checkbox');
    const checkboxErrorBox = document.querySelector('#checkbox-error-box')

    if (checkboxElement.checked) {
        toggleErrorMessage(checkboxElement, checkboxErrorBox);

        return true;
    } else {
        toggleErrorMessage(checkboxElement, checkboxErrorBox, 'Обязательно для заполнения');
    }

    return false;
}

function toggleView() {
    const regView = document.querySelector('.reg-form');
    const authView = document.querySelector('.auth-form')

    if (view === 'reg') {
        regView.style.display = 'none';
        authView.style.display = 'flex';
        view = 'auth';
    } else {
        authView.style.display = 'none';
        regView.style.display = 'flex'
        view = 'reg'
    }
}



// function validateEmail () {
//     const email = document.querySelector('#email');
//     const errorEmptyEmail = document.querySelector('.error-emptyWrapper')
//     const requaried = document.querySelector('.error-required')
//
//     function regEpx (email) {
//         const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return expression.test( String(email).toLowerCase());
//     }
//
//     if (email.value.length === 0) {
//         email.classList.add('error-box')
//         requaried.style.color = 'red'
//         errorEmptyEmail.textContent = "Поле обязательно для заполнения"
//     } else {
//         email.classList.remove('error-box')
//         errorEmptyEmail.style.display = 'none'
//         requaried.style.color = 'gray'
//     }
//
//     if (!regEpx(email.value)) {
//         errorEmptyEmail.textContent = "Некорректный Email"
//         email.classList.add('error-box')
//         requaried.style.color = 'red'
//     } else {
//         email.classList.remove('error-box')
//         requaried.style.color = 'gray'
//     }
//
//
//
// }
//
// function errorEmptyInput () {
//     const test = document.querySelectorAll(".error-emptyWrapper")
//     // test.style.display = 'block'
//     test.forEach(element => {
//         element.style.display = 'block';
//     });
// }
//
// function validatePassword() {
//     const password = document.querySelector('#password');
//     const errorEmptyPassword = document.querySelector('.error-emptyPassword')
//     const required = document.querySelector('.error-required-password')
//     password.addEventListener('input', validatePassword);
//
//     if (password.value.length === 0) {
//         errorEmptyPassword.textContent = 'Поле обязательно для заполнения'
//         password.classList.add('error-box')
//         required.style.color = 'red'
//     }
//     else if (password.value.length < 8 ) {
//         password.classList.add('error-box')
//         errorEmptyPassword.textContent = 'Пароль должен содержать минимум 8 символов'
//         required.style.color = 'red'
//     } else {
//         password.classList.remove('error-box')
//         errorEmptyPassword.style.display = 'none'
//         required.style.color = 'gray'
//     }
// }
//
// function validateCheckBox () {
//
//     const checkBox = document.querySelector('#checkbox')
//     const errorCheckBox = document.querySelector('.checkbox+label::before')
//     const errorEmptyCheckbox = document.querySelector(".error-empty-checkbox")
//     const required = document.querySelector('.error-required-checkbox')
//     if (checkBox.checked) {
//         errorEmptyCheckbox.style.display = 'none'
//         required.style.color = 'gray'
//     }
//
// }
//
// function signIn () {
//
//         if (errorEmptyInput && validateEmail && validatePassword) {
//             const email = document.querySelector('#email').value;
//             const password = document.querySelector('#password').value;
//             localStorage.setItem('userEmail', email)
//             localStorage.setItem('userPassword', password)
//             // document.location.href = './index.html'
//
//         }
// }
//
//
// function validateForm () {
//     errorEmptyInput()
//     validateEmail()
//     validatePassword()
//     // signIn()
// }
//
// const submitBtn = document.querySelector('#submitBtn');
// submitBtn.addEventListener('click', validateForm);
// submitBtn.preventDefault()







