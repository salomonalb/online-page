const numberOne = document.getElementById('one')
const numberTwo = document.getElementById('two')
const numberThree = document.getElementById('three')
const numberFour = document.getElementById('four')
const numberFive = document.getElementById('five')
const submitButton = document.getElementById('submit')
const root = document.getElementById('root');
let value = 0;


numberOne.addEventListener('click', () => {
    let selected = numberOne.getAttribute('data-selected')
    console.log(selected)
    if (selected === 'false') {
        numberOne.setAttribute('data-selected', 'true')
        numberTwo.setAttribute('data-selected', 'false')
        numberThree.setAttribute('data-selected', 'false')
        numberFour.setAttribute('data-selected', 'false')
        numberFive.setAttribute('data-selected', 'false')

        value = 1
    } else {
        numberOne.setAttribute('data-selected', 'false')
    }
})

numberTwo.addEventListener('click', () => {
    let selected = numberTwo.getAttribute('data-selected')
    console.log(selected)
    if (selected === 'false') {
        numberTwo.setAttribute('data-selected', 'true')
        numberOne.setAttribute('data-selected', 'false')
        numberThree.setAttribute('data-selected', 'false')
        numberFour.setAttribute('data-selected', 'false')
        numberFive.setAttribute('data-selected', 'false')

        value = 2
    } else {
        numberTwo.setAttribute('data-selected', 'false')
    }
})

numberThree.addEventListener('click', () => {
    let selected = numberThree.getAttribute('data-selected')
    console.log(selected)
    if (selected === 'false') {
        numberThree.setAttribute('data-selected', 'true')
        numberOne.setAttribute('data-selected', 'false')
        numberTwo.setAttribute('data-selected', 'false')
        numberFour.setAttribute('data-selected', 'false')
        numberFive.setAttribute('data-selected', 'false')

        value = 3
    } else {
        numberThree.setAttribute('data-selected', 'false')
    }
})

numberFour.addEventListener('click', () => {
    let selected = numberFour.getAttribute('data-selected')
    console.log(selected)
    if (selected === 'false') {
        numberFour.setAttribute('data-selected', 'true')
        numberOne.setAttribute('data-selected', 'false')
        numberTwo.setAttribute('data-selected', 'false')
        numberThree.setAttribute('data-selected', 'false')
        numberFive.setAttribute('data-selected', 'false')

        value = 4
    } else {
        numberFour.setAttribute('data-selected', 'false')
    }
})

numberFive.addEventListener('click', () => {
    let selected = numberFive.getAttribute('data-selected')
    console.log(selected)
    if (selected === 'false') {
        numberFive.setAttribute('data-selected', 'true')
        numberOne.setAttribute('data-selected', 'false')
        numberTwo.setAttribute('data-selected', 'false')
        numberThree.setAttribute('data-selected', 'false')
        numberFour.setAttribute('data-selected', 'false')
        

        value = 5
    } else {
        numberFive.setAttribute('data-selected', 'false')
    }
})

submitButton.addEventListener('click', ()=> {
    if (value) {
        root.innerHTML = `<article class="rating-card">
    <img class="rating-card__illustration" src="images/illustration-thank-you.svg" alt="illustration">
    <p class="rating-card__user-selection">You selected ${value} out of 5</p>
    <h2 class="rating-card__title--submited">Thank you!</h2>
    <p class="rating-card__paragraph--submited">
        we appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
    </p>
</article>`
    } else {
        alert('you must select a number')
    }
})