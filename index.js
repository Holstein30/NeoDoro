// JS

// Variables
let countdown = 25 * 60;
const displayTimer = document.querySelector('.display__time-left');
const timerButton = document.querySelector('.timer__button');

let renderTimer = () => {
    displayTimer.textContent = countdown;
};

timerButton.addEventListener('click', () => {
    setInterval(countdown--, 1000);
    renderTimer();
});
