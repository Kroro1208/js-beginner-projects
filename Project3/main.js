const yearNameEl = document.getElementById('year');
const monthNameEl = document.getElementById('month-name');
const dayNumEl = document.getElementById('day-number');
const dayNameEl = document.getElementById('day-name');

const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString('en', {
    month: 'long'
});

dayNameEl.innerText = date.toLocaleString('en', {
    weekday: 'long'
})

dayNumEl.innerHTML = date.getDate();
yearNameEl.innerText = date.getFullYear();
