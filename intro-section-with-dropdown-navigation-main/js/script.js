"use strict"
const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const navigation = document.getElementById('navigation');
const featuresToggle = document.getElementById('features-toggle');
const featuresSublist = document.getElementById('features-sublist');
const featuresIcon = document.getElementById('features-icon');

const companyToggle = document.getElementById('company-toggle');
const companySublist = document.getElementById('company-sublist');
const companyIcon = document.getElementById('company-icon');

const filter = document.getElementById('filter');

openButton.addEventListener('click', () =>  {
    navigation.style.display = "flex";
    filter.style.display = "block";
})

closeButton.addEventListener('click', () => {
    navigation.style.display = "none"
    filter.style.display = "none"
})

filter.addEventListener('click', () => {
    navigation.style.display = "none"
    filter.style.display = "none"
})

featuresToggle.addEventListener('click', () => {
    if (featuresSublist.style.display === "flex") {
        featuresSublist.style.display = "none";
        console.log(featuresIcon.src)
    } else {
    featuresSublist.style.display = "flex";
    }

    if (featuresIcon.getAttribute('data-open') === "false") {
        featuresIcon.setAttribute('data-open', 'true');
        featuresIcon.src = "images/icon-arrow-up.svg";
    } else {
        featuresIcon.setAttribute('data-open', 'false');
        featuresIcon.src = "images/icon-arrow-down.svg"
    }
})


companyToggle.addEventListener('click', () => {
    if (companySublist.style.display === "flex") {
        companySublist.style.display = "none";
        console.log(companyIcon.src)
    } else {
    companySublist.style.display = "flex";
    }

    if (companyIcon.getAttribute('data-open') === "false") {
        companyIcon.setAttribute('data-open', 'true');
        companyIcon.src = "images/icon-arrow-up.svg";
    } else {
        companyIcon.setAttribute('data-open', 'false');
        companyIcon.src = "images/icon-arrow-down.svg"
    }
})

window.addEventListener('resize', ()=> {
    if (window.innerWidth >= 900 ) {
        navigation.style.display = "flex";
        filter.style.display = "none"
    } else {
        navigation.style.display = "none";
        filter.style.display = "none"
    }
})

