"use strict";

// const test = document.querySelector('.form-input');
// test.classList.add('error-box')

const onInputUsernameHandler = ({target}) => {
    const value = target;
    const inputWrapperElement = document.querySelector('.form-input');

    if (!validateEmail(value)) inputWrapperElement.classList.add('error-box');
    else inputWrapperElement.classList.remove('error-box');
}

function validateEmail (email) {
    const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return regExp.test(String(email).toLowerCase());
}

function errorEmptyInput () {
    const test = document.querySelectorAll(".error-emptyWrapper")
    // test.style.display = 'block'
    test.forEach(element => {
        element.style.display = 'block';
    });
}

// errorEmptyInput()

const password = document.querySelector('#password');
password.addEventListener('input', validatePassword);

function validatePassword() {
    if (password.value.length < 8 ) {
        password.classList.add('error-box')
    } else password.classList.remove('error-box')
    return true

}

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', errorEmptyInput, validateEmail, validatePassword)



//
// const testSubmitBtn = document.querySelector('#submitBtn')
// testSubmitBtn.addEventListener()


