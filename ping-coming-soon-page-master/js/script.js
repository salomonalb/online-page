"use strict";
const emailInput = document.getElementById('email');
const form = document.getElementById('form');

emailInput.addEventListener('input', event => {
    emailInput.value.length >= 5
    ? input.classList.remove('error')
    : input.classList.add('error')
})

emailInput.addEventListener('invalid', () => {
    emailInput.classList.add('error');
})

form.addEventListener('submit', (event) => {

    if (emailInput.value.length < 4) {
        emailInput.classList.add('error');
        event.preventDefault();
    }
})

