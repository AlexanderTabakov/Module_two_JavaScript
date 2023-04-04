"use strict";

// const test = document.querySelector('.form-input');
// test.classList.add('error-box')

// const onInputUsernameHandler = ({target}) => {
//     const value = target;
//     const inputWrapperElement = document.querySelector('#email');
//
//     if (!validateEmail(value)) inputWrapperElement.classList.add('error-box');
//     else inputWrapperElement.classList.remove('error-box');
// }
//
// function validateEmail (email) {
//     let regExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
//     return regExp.test(String(email).toLowerCase());
// }

function validateEmail () {
    const email = document.querySelector('#email');
    const errorEmptyEmail = document.querySelector('.error-emptyWrapper')
    const requaried = document.querySelector('.error-required')

    function regEpx (email) {
        const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return expression.test( String(email).toLowerCase());
    }

    if (email.value.length === 0) {
        email.classList.add('error-box')
        requaried.style.color = 'red'
        errorEmptyEmail.textContent = "Поле обязательно для заполнения"
    } else {
        email.classList.remove('error-box')
        errorEmptyEmail.style.display = 'none'
        requaried.style.color = 'gray'
    }

    if (!regEpx(email.value)) {
        errorEmptyEmail.textContent = "Некорректный Email"
        email.classList.add('error-box')
        requaried.style.color = 'red'
    } else {
        email.classList.remove('error-box')
        requaried.style.color = 'gray'
    }



}

function errorEmptyInput () {
    const test = document.querySelectorAll(".error-emptyWrapper")
    // test.style.display = 'block'
    test.forEach(element => {
        element.style.display = 'block';
    });
}

function validatePassword() {
    const password = document.querySelector('#password');
    const errorEmptyPassword = document.querySelector('.error-emptyPassword')
    const required = document.querySelector('.error-required-password')
    password.addEventListener('input', validatePassword);

    if (password.value.length === 0) {
        errorEmptyPassword.textContent = 'Поле обязательно для заполнения'
        password.classList.add('error-box')
        required.style.color = 'red'
    }
    else if (password.value.length < 8 ) {
        password.classList.add('error-box')
        errorEmptyPassword.textContent = 'Пароль должен содержать минимум 8 символов'
        required.style.color = 'red'
    } else {
        password.classList.remove('error-box')
        errorEmptyPassword.style.display = 'none'
        required.style.color = 'gray'
    }
}

function validateCheckBox () {

    const checkBox = document.querySelector('#checkbox')
    const errorCheckBox = document.querySelector('.checkbox+label::before')
    const errorEmptyCheckbox = document.querySelector(".error-empty-checkbox")
    const required = document.querySelector('.error-required-checkbox')
    if (checkBox.checked) {
        errorEmptyCheckbox.style.display = 'none'
        required.style.color = 'gray'
    }

}

function signIn () {

        if (errorEmptyInput && validateEmail && validatePassword) {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            localStorage.setItem('userEmail', email)
            localStorage.setItem('userPassword', password)
            document.location.href = './index.html'

        }
}


function validateForm () {
    errorEmptyInput()
    validateEmail()
    validatePassword()
    // signIn()
}

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', validateForm);
submitBtn.preventDefault()




//
// const testSubmitBtn = document.querySelector('#submitBtn')
// testSubmitBtn.addEventListener()


