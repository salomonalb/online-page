"use strict"

const btn = document.querySelector('#button');
const nav = document.querySelector('#nav');

btn.addEventListener('click', () => {
    if(nav.style.display === 'block') {
        nav.style.display = "none";
    } else {
        nav.style.display = 'block';
    }
});

window.addEventListener('resize', ()=> {
    if (window.innerWidth >= 769 ) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});
