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

function test () {
    const test = document.querySelector("#error-emptyWrapper")
    test.classList.add('error-emptyWrapper')
}

const password = document.querySelector('#password');
password.addEventListener('input', validatePassword);

function validatePassword() {
    if (password.value.length < 2) {
        password.classList.add('error-box')
    } else password.classList.remove('error-box')
}

const testSubmitBtn = document.querySelector('#submitBtn')
testSubmitBtn.addEventListener()


