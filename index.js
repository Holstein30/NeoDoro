// JS

// add a counter so that when 1 pomodoro starts it will keep track of if short or long break is next

// Variables
let countdown;
let counter = 0;
const displayTimer = document.querySelector('.display__time-left');
const timerControls = document.querySelector('.timer__controls');
const timerButton = document.querySelector('.timer__button');

let timer = stop => {
    clearInterval(countdown);
    console.log(counter);
    const now = Date.now();
    let then;
    let shorts;
    if (counter % 2 === 0) {
        then = now + 15 * 1000;
    } else if (shorts % 4 === 0) {
        then = now + 10 * 1000;
    } else {
        shorts++;
        then = now + 5 * 1000;
    }

    countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if (secondsLeft < 0) {
            clearInterval(countdown);
            counter++;
            timer();
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
