// JS

// Variables
let countdown;
let time = 5;
const displayTimer = document.querySelector(".display__time-left");
const timerControls = document.querySelector(".timer__controls");
const timerButton = document.querySelector(".timer__button");

let timer = seconds => {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
};

let displayTimeLeft = secondsLeft => {
  const minutes = Math.floor(secondsLeft / 60);
  const remainderSeconds = secondsLeft % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  displayTimer.textContent = display;
};

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));

timerControls.addEventListener("click", e => {
  e.preventDefault();
  displayTimer.textContent = "25:00";
  timerButton.textContent = "RESET";
  timer();
});
