"use strict"

const pageViews = document.getElementById('pageviews');
const slider = document.getElementById('slider');
const progressBar = document.getElementById('progress');
const price = document.getElementById('price');
const check = document.getElementById('check');
const discount = document.getElementById('discount');

function changeNumbers(pageViewsString, priceString) {
    pageViews.textContent = pageViewsString;
    price.textContent = priceString;
}

function handleInput() {
    let sliderPosition = Number(slider.value);

    if (!check.checked) {
        switch (sliderPosition) {
            case 1:
                changeNumbers('10K', 8);
                progressBar.style.width = '0%';
                break;
            case 2:
                changeNumbers('50K', 12);
                progressBar.style.width = '25%';
                break;
            case 3:
                changeNumbers('100K', 16);
                progressBar.style.width = '50%';
                break;
            case 4:
                changeNumbers('500K', 24);
                progressBar.style.width = '75%';
                break;
            case 5:
                changeNumbers('1M', 36);
                progressBar.style.width = '100%';
                break;
            default:
                break;
        }
    } else {
        switch (sliderPosition) {
            case 1:
                changeNumbers('10K', 6);
                progressBar.style.width = '0%';
                break;
            case 2:
                changeNumbers('50K', 9);
                progressBar.style.width = '25%';
                break;
            case 3:
                changeNumbers('100K', 12);
                progressBar.style.width = '50%';
                break;
            case 4:
                changeNumbers('500K', 18);
                progressBar.style.width = '75%';
                break;
            case 5:
                changeNumbers('1M', 27);
                progressBar.style.width = '100%';
                break;
            default:
                break;
        }
    }

}

slider.addEventListener('input', handleInput)

check.addEventListener('input', handleInput)


if (window.innerWidth >= 480) {
    discount.textContent = '25% discount'
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 480) {
        discount.textContent = '25% discount'
    } else {
        discount.textContent = '-25%'
    }
})