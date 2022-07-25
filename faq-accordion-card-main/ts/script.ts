/* Getting all the elements with the class name of faq-card__accordion. */
const accordions = document.getElementsByClassName('faq-card\_\_accordion');

/* This is a for loop that is looping through the accordions. It is adding an event listener to each
accordion. When the accordion is clicked, it is toggling the classList of the children of the
accordion. */
for (const accordion of accordions) {
    accordion.addEventListener('click', () => {
        accordion.children[0].classList.toggle('question-open');
        accordion.children[1].classList.toggle('icon-open');
        accordion.children[2].classList.toggle('answer-open')
    })
}


