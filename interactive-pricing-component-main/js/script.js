
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