"use strict"

let datajson = `[
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]`

const week = JSON.parse(datajson);
const chartRoot = document.getElementById('chart');
const totalExpenses = document.getElementById('total-expenses');
let total = 0;
let index = 0;

for (const day of week) {
    index +=1;

    let chartColumn = document.createElement('div');
    chartColumn.classList.add('chart__column');

    let chartAmount = document.createElement('p');
    chartAmount.classList.add('chart__amount');
    chartAmount.id = `amount-${index}`;
    chartAmount.textContent = `$ ${day.amount}`;

    let chartBar = document.createElement('div');
    chartBar.classList.add(`chart__bar--${index}`);
    chartBar.id = `bar-${index}`;

    let chartDay = document.createElement('p');
    chartDay.classList.add('chart__day');
    chartDay.textContent = `${day.day}`;

    chartColumn.appendChild(chartAmount);
    chartColumn.appendChild(chartBar);
    chartColumn.appendChild(chartDay);

    chartRoot.appendChild(chartColumn);

    chartBar.addEventListener('mouseover', () => {
        chartAmount.style.opacity = '1';
        chartBar.classList.add('wiggle');
        chartAmount.classList.add('pulse')
    })
    chartBar.addEventListener('mouseout', () => {
        chartAmount.style.opacity = '0';
        chartBar.classList.remove('wiggle');
        chartAmount.classList.remove('pulse')
    })
}

week.forEach(day => {
    total += day.amount;
});

totalExpenses.textContent = `$${total}`;