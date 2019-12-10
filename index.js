// JS

// Variables
let countdown;
let time = 5;
const displayTimer = document.querySelector('.display__time-left');
const timerControls = document.querySelector('.timer__controls');
const timerButton = document.querySelector('.timer__button');

let timer = () => {
    clearInterval(countdown);

    countdown = setInterval(() => {
        if (time === 0) {
            alert('HOWDY');
            clearInterval(countdown);
        } else {
            time--;
        }

        displayTimeLeft(time);
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
