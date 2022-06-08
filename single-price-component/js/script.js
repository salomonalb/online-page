/* Adding a class to the divs depending on the screen size. */
let descriptionCard = document.getElementById('description-card');
let pricingCard = document.getElementById('pricing-card');
let benefitsCard = document.getElementById('benefits-card');
let windowSize = window.innerWidth;

if (windowSize >= 656 ) {
    descriptionCard.classList.add('slideDown');
    pricingCard.classList.add('slideRight');
    benefitsCard.classList.add('slideLeft');
} else {
    descriptionCard.classList.add('slideLeft');
    pricingCard.classList.add('slideRight');
    benefitsCard.classList.add('slideLeft');
}