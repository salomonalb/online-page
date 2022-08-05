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

/* nameInput.addEventListener('input', (event) => {
    nameInput.value.length >= 1 
    ? nameInput.classList.remove('--error')
    : nameInput.classList.add('--error')
}) */


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (nameInput.value.length < 1) {
        nameInput.classList.add('--error');
    }
    if (lastnameInput.value.length < 1) {
        lastnameInput.classList.add('--error');
    }
    if (passwordInput.value.length < 1) {
        passwordInput.classList.add('--error');
    }
    if (emailInput.value.length < 1) {
        emailInput.classList.add('--error');
    }



    

})


/* regular expression for the email */
/* onchange event for the inputs to add or remove the error class
but onlyafter trying to submite once, maybe add the event listener inside the first event listener for submitting the form. */
/* if values are correct submit the form */ 

