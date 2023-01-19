const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let timerId = null;

stopButton.disabled = true;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onStart = () => {
  timerId = setInterval(() => {
    document.querySelector('body').style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
};

const onStop = () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
};
startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);
