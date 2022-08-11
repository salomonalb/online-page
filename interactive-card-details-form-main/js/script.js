"use strict"

// form inputs
const formContainer = document.getElementById('form-container');
const form = document.getElementById('form')
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('card-number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');
const formButton = document.getElementById('button1');

// alert text

const alertName = document.getElementById('alert-name');
const alertNumber = document.getElementById('alert-number');
const alertDate = document.getElementById('alert-date');
const alertCvc = document.getElementById('alert-cvc');

// card output

const cardName = document.getElementById('out-name');
const cardNumber = document.getElementById('out-number');
const cardMonth = document.getElementById('out-month');
const cardYear = document.getElementById('out-year');
const cardCvc = document.getElementById('out-cvc');

// update class based on validty

nameInput.addEventListener('input', (event) => {
    if (nameInput.validity.valid === false) {
        nameInput.classList.add('error');
        alertName.classList.add('error');
        alertName.textContent = "Only letters and spaces";

    } else {
        nameInput.classList.remove('error');
        alertName.classList.remove('error');
        alertName.textContent = "";
    }


    if (nameInput.value.length < 1) {
        cardName.textContent = "Name Lastname";
    } else {
        cardName.textContent = nameInput.value;
    }

    
})

numberInput.addEventListener('input', (event) => {
    if (numberInput.validity.valid === false) {
        numberInput.classList.add('error');
        alertNumber.classList.add('error');
        alertNumber.textContent = "Only numbers, sixteen digits"
    } else {
        numberInput.classList.remove('error');
        alertNumber.classList.remove('error');
        alertNumber.textContent = "";
    }

    if (numberInput.value-length < 1) {
        cardNumber.textContent = "0000 0000 0000 0000"
    } else {
        const stringsArray = numberInput.value.match(/.{1,4}/g) || [];

        cardNumber.textContent = `
        ${stringsArray[0]? stringsArray[0]: ''}
        ${stringsArray[1]? stringsArray[1]: ''}
        ${stringsArray[2]? stringsArray[2]: ''}
        ${stringsArray[3]? stringsArray[3]: ''}`
    }
    
})

monthInput.addEventListener('input', (event) => {
    if (monthInput.validity.valid === false || Number(monthInput.value) > 12 || Number(monthInput.value) < 1) {
        monthInput.classList.add('error');
        alertDate.classList.add('error');
        alertDate.textContent = "months between 01 and 12, years between 2022 and 2042";
    } else {
        monthInput.classList.remove('error');
        alertDate.classList.remove('error');
        alertDate.textContent = "";
    }

    if (monthInput.value.length < 1) {
        cardMonth.textContent = "00";
    } else {
        cardMonth.textContent = monthInput.value;
    }
    
})

yearInput.addEventListener('input', (event) => {
    if (yearInput.validity.valid === false || Number(yearInput.value) > 50 || Number(monthInput.value) < 22) {
        yearInput.classList.add('error');
        alertDate.classList.add('error');
        alertDate.textContent = "months between 01 and 12, years between 2022 and 2050";
    } else {
        yearInput.classList.remove('error');
        alertDate.classList.remove('error');
        alertDate.textContent = "";
    }

    
    if (yearInput.value.length < 1) {
        cardYear.textContent = "00";
    } else {
        cardYear.textContent = yearInput.value;
    }
})

cvcInput.addEventListener('input', (event) => {
    if (cvcInput.validity.valid === false) {
        cvcInput.classList.add('error');
        alertCvc.classList.add('error');
        alertCvc.textContent = "Only numbers, three digits";
    } else {
        cvcInput.classList.remove('error');
        alertCvc.classList.remove('error');
        alertCvc.textContent = "";
    }

    if (cvcInput.value.length < 1) {
        cardCvc.textContent = "000"
    } else {
        cardCvc.textContent = cvcInput.value;
    }
    
})


form.addEventListener('submit', (event) => {

    if (Number(yearInput.value) > 50 || Number(monthInput.value) < 12) {
        event.preventDefault();
        alertDate.classList.add('error');
        alertDate.textContent = "months between 01 and 12, years between 2022 and 2050";
    }
    if (Number(monthInput.value) > 12 || Number(monthInput.value) < 1) {
        event.preventDefault();
        alertDate.classList.add('error');
        alertDate.textContent = "months between 01 and 12, years between 2022 and 2050";
    }
    if (nameInput.value.length < 1) {
        event.preventDefault();
        nameInput.classList.add('error');
        alertName.classList.add('error');
        alertName.textContent = "Cant be blank";
    }
    if (numberInput.value.length < 1) {
        event.preventDefault();
        numberInput.classList.add('error');
        alertNumber.classList.add('error');
        alertNumber.textContent = "Cant be blank";
    }
    if (monthInput.value.length < 1) {
        event.preventDefault();
        monthInput.classList.add('error');
        alertDate.classList.add('error');
        alertDate.textContent = "Cant be Blank";
    }
    if (yearInput.value.length < 1) {
        event.preventDefault();
        yearInput.classList.add('error');
        alertDate.classList.add('error');
        alertDate.textContent = "Cant be Blank";
    }
    if (cvcInput.value.length < 1) {
        event.preventDefault();
        cvcInput.classList.add('error');
        alertCvc.classList.add('error');
        alertCvc.textContent = "Cant be Blank";
    }
    
})




