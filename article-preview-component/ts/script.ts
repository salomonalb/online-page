"use strict"

const shareButton = document.getElementById('share-button');
const shareComponent = document.getElementById('share-component');
const main = document.getElementsByTagName('main')[0];
const shareButton2 = document.getElementById('share-button2')




shareButton?.addEventListener('click', ()=> {
    shareComponent?.classList.toggle('hidden');
})

shareButton2?.addEventListener('click', () => {
    shareComponent?.classList.add('hidden')
})

