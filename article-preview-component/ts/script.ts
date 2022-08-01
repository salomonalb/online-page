"use strict"
const shareButton = document.getElementById('share-button');
const shareComponent = document.getElementById('share-component');
const card = document.getElementById('card')

shareButton?.addEventListener('click', () => {
    shareComponent?.classList.remove('js-toggle-visibility');
})

window.addEventListener('click', (event) => {
    if (event.target === shareComponent) {
        shareComponent?.classList.add('js-toggle-visibility');
    } else if (event.target === document.body) {
        shareComponent?.classList.add('js-toggle-visibility');
    } else if (event.target === card) {
        shareComponent?.classList.add('js-toggle-visibility');
    }
})


