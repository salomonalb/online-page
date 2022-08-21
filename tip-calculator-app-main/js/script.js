"use strict"

const app = document.getElementById('app');

// Text Inputs
const billInput = document.querySelector('#bill');
const customInput = document.querySelector('#custom');
const peopleInput = document.querySelector('#numOfPeople');


// Buttons
const button5 = document.getElementById('5');
const button10 = document.getElementById('10');
const button15 = document.getElementById('15');
const button25 = document.getElementById('25');
const button50 = document.getElementById('50');

// Outputs
const tipOutput = document.querySelector('#tipAmount');
const totalOutput = document.querySelector('#total');

// Alerts
const billAlert = document.getElementById('billAlert');
const customAlert = document.getElementById('customAlert');
const peopleAlert = document.getElementById('peopleAlert');

// steps #1: validity and classes, #2: buttons preventdefault and percentage
// values, #3: show output, #4: calculations logic;

app.addEventListener('submit',  (event)=> {
    event.preventDefault()
})




billInput.addEventListener('input', ()=> {
    if (billInput.validity.valid === false || billInput.value === "" || Number(billInput.value) < 1) {
        billInput.classList.remove('--valid');
        billInput.classList.add('--invalid');
        billAlert.style.display = 'block';
        billAlert.textContent = `Only numbers, Can't be zero, up to two decimal points`;
    } else if (billInput.validity.valid === true) {
        billInput.classList.remove('--invalid');
        billInput.classList.add('--valid');
        billAlert.style.display = 'none';
        billAlert.textContent = ``;
    }
})

customInput.addEventListener('input', ()=> {
    if (customInput.validity.valid === false || customInput.value === "" || Number(customInput.value) < 1) {
        customInput.classList.remove('--valid');
        customInput.classList.add('--invalid');
        customAlert.style.display = 'block';
        customAlert.textContent = `Only numbers, Can't be zero, whole numbers, up to three digits`;
    } else if (customInput.validity.valid === true) {
        customInput.classList.remove('--invalid');
        customInput.classList.add('--valid');
        customAlert.style.display = 'none';
        customAlert.textContent = ``;
    }
})

peopleInput.addEventListener('input', ()=> {
    if (peopleInput.validity.valid === false || peopleInput.value === "" || Number(peopleInput.value) < 1) {
        peopleInput.classList.remove('--valid');
        peopleInput.classList.add('--invalid');
        peopleAlert.style.display = 'block';
        peopleAlert.textContent = `Only numbers, Can't be zero, whole numbers, up to three digits`;
    } else if (peopleInput.validity.valid === true) {
        peopleInput.classList.remove('--invalid');
        peopleInput.classList.add('--valid');
        peopleAlert.style.display = 'none';
        peopleAlert.textContent = ``;
    }
})





