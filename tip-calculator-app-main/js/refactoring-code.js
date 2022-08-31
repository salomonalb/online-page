"use strict"


export function inputFunction(input, alert, value, string) {
    if (input.validity.valid === false || input.value === "" || input.value < 1) {
        input.classList.remove('--valid');
        input.classList.add('--invalid');
        alert.style.display = 'block';
        alert.textContent = string;

        
        value = 0;
        clearOutput()

    } else {
        input.classList.remove('--invalid');
        input.classList.add('--valid');
        alert.style.display = 'none';
        alert.textContent = ``;

        value = input.value;
        calculation()
    }
}

