// JS

// Variables
let countdown = 1500;
const displayTimer = document.querySelector('.display__time-left');
const timerButton = document.querySelector('.timer__button');

let timer = () => {
    if (countdown === 0) {
        countdown = 0;
        clearInterval();
        return;
    }
    countdown--;
    displayTimeLeft(countdown);
};

let displayTimeLeft = timeLeft => {
    const minutes = Math.floor(timeLeft / 60);
    const secondsLeft = timeLeft % 60;
    const display = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    document.title = display;
    displayTimer.textContent = display;
};

timerButton.addEventListener('click', () => {
    setInterval(timer, 1000);
});
