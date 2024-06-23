const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');
const timerEl = document.getElementById('timer');
const breakModal = document.getElementById('breakModal');
const closeModal = document.getElementById('closeModal');

let interval;
let timeLeft = 10;
let isBreakTime = false;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timerEl.innerHTML = formattedTime
};

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            if (isBreakTime) {
                alert('Break is over, back to work');
                timeLeft = 1500;
                isBreakTime = false;
            } else {
                breakModal.classList.add("show");
                timeLeft = 10;
                isBreakTime = true;
            }
            startTimer();
        }
    }, 1000);
};

function stoptTimer() {
    clearInterval(interval);
};

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
};

closeModal.onclick = function () {
    breakModal.classList.remove("show");
    isBreakTime = false; // モーダルが閉じられたら休憩モードをリセット
};

window.onclick = function (event) {
    if (event.target === breakModal) {
        breakModal.classList.remove("show");
        isBreakTime = false; // モーダルが閉じられたら休憩モードをリセット
    }
};

// ページリロード時にモーダルが表示されないようにする
window.onload = function () {
    breakModal.classList.remove("show");
    isBreakTime = false;
};

startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stoptTimer);
resetEl.addEventListener('click', resetTimer);