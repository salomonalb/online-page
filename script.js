let monthly = document.getElementById('monthly');
let annually = document.getElementById('annually');
let basic = document.getElementById('basic-price');
let pro = document.getElementById('pro-price');
let enterprise = document.getElementById('enterprise-price');

monthly.addEventListener('input', ()=> {
    basic.innerHTML = '<sup>$</sup>10';
    pro.innerHTML = '<sup>$</sup>15';
    enterprise.innerHTML = '<sup>$</sup>35';
});

annually.addEventListener('input', ()=> {
    basic.innerHTML = '<sup>$</sup>8';
    pro.innerHTML = '<sup>$</sup>12';
    enterprise.innerHTML = '<sup>$</sup>30';
});