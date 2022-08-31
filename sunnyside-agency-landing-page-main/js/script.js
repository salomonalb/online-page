"use strict"

const button = document.querySelector('#button');
const nav = document.querySelector('#nav');

button.addEventListener('click', () => {
    if(nav.style.display === 'block') {
        nav.style.display = "none";
    } else {
        nav.style.display = 'block';
    }
    
})