// JS

// Variables
let countdown = 10;
const displayTimer = document.querySelector('.display__time-left');
const timerButton = document.querySelector('.timer__button');

let timer = () => {
    if (countdown === 0) {
        countdown = 0;
        clearInterval();
        return;
    }
    countdown--;
    displayTimer.textContent = countdown;
};

timerButton.addEventListener('click', () => {
    setInterval(timer, 1000);
});
