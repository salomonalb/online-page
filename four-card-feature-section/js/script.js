let header = document.getElementById('header');

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');

let windowSize = window.innerWidth;

if (windowSize < 720) {
    header.classList.add('slideDown');
    card1.classList.add('slideRight');
    card2.classList.add('slideRight');
    card3.classList.add('slideRight');
    card4.classList.add('slideRight');
} 

else if (windowSize >= 1020) {
    header.classList.add('slideDown');
    card1.classList.add('slideRight');
    card2.classList.add('slideDown');
    card3.classList.add('slideLeft');
    card4.classList.add('slideUp');
}

else {
    header.classList.add('slideDown');
    card1.classList.add('slideRight');
    card2.classList.add('slideLeft');
    card3.classList.add('slideRight');
    card4.classList.add('slideLeft');
} 


