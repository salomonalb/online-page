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
const buttons = [button5, button10, button15, button25, button50];
const resetButton = document.getElementById('reset')

// Outputs
const tipOutput = document.querySelector('#tipAmount');
const totalOutput = document.querySelector('#total');

// Alerts
const billAlert = document.getElementById('billAlert');
const customAlert = document.getElementById('customAlert');
const peopleAlert = document.getElementById('peopleAlert');

// values
let billValue = 0;
let percentageValue = 0;
let peopleValue = 0;


function clearCustomInput() {
    customInput.value = '';
    customInput.classList.remove('--valid');
    customInput.classList.remove('--invalid');
    customAlert.style.display = 'none';
    customAlert.textContent = ``;
}

function clearOutput() {
    tipOutput.textContent = `$0.00`;
    totalOutput.textContent = `$0.00`;
}

function calculation() {

    billValue = Number.parseInt(billValue);
    percentageValue = Number.parseInt(percentageValue);
    peopleValue = Number.parseInt(peopleValue);

    console.log(typeof billValue + " " + billValue)
    console.log(typeof percentageValue + " " + percentageValue);
    console.log(typeof peopleValue + " " + peopleValue);


    const tipAmount = ((billValue * percentageValue) / 100) / peopleValue || 0;

    const totalAmount = (billValue + ((billValue * percentageValue) / 100)) / peopleValue || 0; 
    

    if (tipAmount === NaN || tipAmount === Infinity || tipAmount === 0 ||totalAmount === NaN || totalAmount === Infinity  ) {

        clearOutput()
        
    } else {

        console.log('tip amount ' + typeof tipAmount + ` ${tipAmount}`);

        tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
        totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
    }
}

function billValidate() {
    
    if (billInput.validity.valid === false || billInput.value === "" || billInput.value < 1) {
        billInput.classList.remove('--valid');
        billInput.classList.add('--invalid');
        billAlert.style.display = 'inline-block';
        billAlert.textContent = `Only numbers, Can't be zero, up to two decimal points`;

        billValue = 0;
        clearOutput()

        

    } else  {
        billInput.classList.remove('--invalid');
        billInput.classList.add('--valid');
        billAlert.style.display = 'none';
        billAlert.textContent = ``;

        billValue = billInput.value;
        calculation()
    }
}

function customValidate() {
    if (customInput.validity.valid === false || customInput.value === "" || customInput.value < 1) {
        customInput.classList.remove('--valid');
        customInput.classList.add('--invalid');
        customAlert.style.display = 'block';
        customAlert.textContent = `Can't be zero, Only whole numbers up to three digits`;

        
        percentageValue = 0;
        clearOutput()

    } else {
        customInput.classList.remove('--invalid');
        customInput.classList.add('--valid');
        customAlert.style.display = 'none';
        customAlert.textContent = ``;

        percentageValue = customInput.value;
        calculation()
    }

    const otherButtons = [button5, button10, button15, button25, button50];
    otherButtons.forEach((button) => {
        button.classList.remove('--selected')

    })

    
}
function peopleValidate() {
    if (peopleInput.validity.valid === false || peopleInput.value === "" || peopleInput.value < 1) {

        peopleInput.classList.remove('--valid');
        peopleInput.classList.add('--invalid');
        peopleAlert.style.display = 'block';
        peopleAlert.textContent = `Can't be zero, Only whole numbers up to three digits`;

        
        peopleValue = 0;
        clearOutput()

    } else {
        peopleInput.classList.remove('--invalid');
        peopleInput.classList.add('--valid');
        peopleAlert.style.display = 'none';
        peopleAlert.textContent = ``;

        peopleValue = peopleInput.value;
        calculation()
    }
}



// you can use the same function and logic with a function where you pass the input, the alert and a string for it, the value, and other functon for the radio button




app.addEventListener('submit',  (event)=> {
    event.preventDefault()
})

billInput.addEventListener('input', ()=> {
    billValidate()
})

customInput.addEventListener('input', ()=> {
    customValidate()
})

peopleInput.addEventListener('input', ()=> {
    peopleValidate()
})

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        button.classList.add('--selected');
        percentageValue = Number(button.value);

        
        const otherButtons = buttons.filter( otherButton => {
            return otherButton !== button;
        })

        otherButtons.forEach(otherButton => {
            otherButton.classList.remove('--selected')
        })
        clearCustomInput()
        calculation()
    })
})

resetButton.addEventListener('click', event => {
    clearOutput()
    clearCustomInput()
    billValue = 0;
    percentageValue = 0;
    peopleValue = 0;

    buttons.forEach(otherButton => {
        otherButton.classList.remove('--selected')
    })

    peopleInput.classList.remove('--invalid');
    peopleInput.classList.remove('--valid');
    peopleInput.value = "";
    peopleAlert.style.display = 'none';
    peopleAlert.textContent = ``;

    billInput.classList.remove('--invalid');
    billInput.classList.remove('--valid');
    billInput.value = "";
    billAlert.style.display = 'none';
    billAlert.textContent = ``;
})

