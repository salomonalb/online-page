
//Radio Button
const radioBtn = document.getElementById('radio');
let yearly;
function toggle() {
    if (radioBtn.getAttribute('data-yearly') === 'false') {
        radioBtn.setAttribute('data-yearly', 'true')

        yearly = true
    } else {
        radioBtn.setAttribute('data-yearly', 'false')

        yearly = false
    }
    console.log(radioBtn.getAttribute('data-yearly'))
}

radioBtn.addEventListener('click', ()=> {
    toggle()
});

radioBtn.addEventListener('keydown', (event) => {
    if (event.code === "Enter") {
        toggle()
    }
})

/*https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role*/

// -------------------------

const handle = document.getElementById('handle');
const progress = document.getElementById('progress');
const slider = document.getElementById('slider');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');


let placement = ""
slider.addEventListener('mousemove', (e) => {
    console.log(e.offsetX)
    placement = e.offsetX;
})

slider.addEventListener('click', (e) => {
    console.log(e)
    handle.style.left = `min(${placement}px, 100%)`
    progress.style.width = `${placement + 10}px`
    pageviews.textContent = `${placement}K PAGEVIEWS`

    if (yearly) {
        price.textContent = `$${placement - 25}.15`;
    } else {
        price.textContent = `$${placement - 25}.00`
    }

    
})


// -------------

const discount = document.getElementById('discount');

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