// JS

// Variables
let countdown;
const displayTimer = document.querySelector('.display__time-left');
const timerControls = document.querySelector('.timer__controls');
const timerButton = document.querySelector('.timer__button');

let timer = stop => {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + 1500 * 1000;

    countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
};

let displayTimeLeft = timeLeft => {
    const minutes = Math.floor(timeLeft / 60);
    const secondsLeft = timeLeft % 60;
    const display = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    document.title = display;
    displayTimer.textContent = display;
};

timerControls.addEventListener('click', e => {
    e.preventDefault();
    displayTimer.textContent = '25:00';
    timerButton.textContent = 'RESET';
    timer();
});
