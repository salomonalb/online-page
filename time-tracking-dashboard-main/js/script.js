"use strict"

const jsonData = `
[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
`

const activities = JSON.parse(jsonData);
const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const dashboard = document.getElementById('dashboard');

activities.forEach(activity => {
    const card =  document.createElement('article');
    card.id = `${activity.title.toLowerCase().replace(" ", "")}`
    card.classList.add('time-card')
    card.classList.add('zoomer')

    card.innerHTML = `
    <section class="time-card__data-container">
                <div class="time-card__row">
                    <p class="time-card__title">${activity.title}</p>
                    <button class="time-card__button">
                        <img src="images/icon-ellipsis.svg" alt="">
                    </button>
                </div>
                <div class="time-card__responsive-row">
                    <p class="time-card__time">${activity.timeframes.weekly.current}hrs</p>
                    <p class="time-card__last-time">Last Week - ${activity.timeframes.weekly.previous}hrs</p>
                </div>
            </section>
    `;

    dashboard.appendChild(card);
});

dailyBtn.addEventListener('click', () => {

dailyBtn.classList.add('--active');
weeklyBtn.classList.remove('--active');
monthlyBtn.classList.remove('--active');

activities.forEach(activity => {
    const card = document.getElementById(`${activity.title.toLowerCase().replace(" ", "")}`)

    const time = card.children[0].children[1].children[0];
    const lastTime = card.children[0].children[1].children[1];

    time.textContent = `${activity.timeframes.daily.current}hrs`
    lastTime.textContent = `Last Week - ${activity.timeframes.daily.previous}hrs`
})

})

weeklyBtn.addEventListener('click', () => {

    weeklyBtn.classList.add('--active');
    dailyBtn.classList.remove('--active');
    monthlyBtn.classList.remove('--active');
    
    activities.forEach(activity => {
        const card = document.getElementById(`${activity.title.toLowerCase().replace(" ", "")}`)
    
        const time = card.children[0].children[1].children[0];
        const lastTime = card.children[0].children[1].children[1];

        time.textContent = `${activity.timeframes.weekly.current}hrs`
        lastTime.textContent = `Last Week - ${activity.timeframes.weekly.previous}hrs`
    })
    
})

monthlyBtn.addEventListener('click', () => {

    monthlyBtn.classList.add('--active');
    dailyBtn.classList.remove('--active');
    weeklyBtn.classList.remove('--active');
    
    activities.forEach(activity => {
        const card = document.getElementById(`${activity.title.toLowerCase().replace(" ", "")}`)
    
        const time = card.children[0].children[1].children[0];
        const lastTime = card.children[0].children[1].children[1];

        time.textContent = `${activity.timeframes.monthly.current}hrs`
        lastTime.textContent = `Last Week - ${activity.timeframes.monthly.previous}hrs`
    })
    
    })





