const radioBtn = document.getElementById('radio');

function toggle() {
    if (radioBtn.getAttribute('data-yearly') === 'false') {
        radioBtn.setAttribute('data-yearly', 'true')
    } else {
        radioBtn.setAttribute('data-yearly', 'false')
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
