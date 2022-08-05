const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');


const formInputs = [nameInput, lastnameInput, emailInput, passwordInput]

formInputs.forEach((input)=> {
    input.addEventListener('input', event => {
        input.value.length >= 1
        ? input.classList.remove('--error')
        : input.classList.add('--error')
    })
})

emailInput.addEventListener('invalid', () => {
    emailInput.classList.add('--error');
})

form.addEventListener('submit', (event) => {

    if (nameInput.value.length < 1) {
        nameInput.classList.add('--error');
        event.preventDefault();
    }
    if (lastnameInput.value.length < 1) {
        lastnameInput.classList.add('--error');
        event.preventDefault();
    }
    if (passwordInput.value.length < 1) {
        passwordInput.classList.add('--error');
        event.preventDefault();
    }
    if (emailInput.value.length < 1) {
        emailInput.classList.add('--error');
        event.preventDefault();
    }
})

