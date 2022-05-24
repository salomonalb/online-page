/* Prices */

let monthly = document.getElementById('monthly');
let annually = document.getElementById('annually');
let basic = document.getElementById('basic-price');
let pro = document.getElementById('pro-price');
let enterprise = document.getElementById('enterprise-price');

function changePrice() {
if (monthly.checked) {
    console.log('monthly is checked');
    basic.innerHTML = '<sup>$</sup>10';
    pro.innerHTML = '<sup>$</sup>15';
    enterprise.innerHTML = '<sup>$</sup>35';
} else if (annually.checked) {
    console.log('annually is checked');
    basic.innerHTML = '<sup>$</sup>8';
    pro.innerHTML = '<sup>$</sup>12';
    enterprise.innerHTML = '<sup>$</sup>30'
}
};

document.addEventListener('DOMContentLoaded', changePrice)
monthly.addEventListener('input', changePrice);
annually.addEventListener('input', changePrice);

/* from prices to credit card */

let cards = document.getElementsByClassName('card');
console.log(cards);

function goToCreditCard() {
    location.href = "../credit card form/creditcard-form.html";
}

cards[0].addEventListener('click', goToCreditCard);
cards[1].addEventListener('click', goToCreditCard);
cards[2].addEventListener('click', goToCreditCard);
