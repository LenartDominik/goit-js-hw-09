const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyHtml = document.querySelector('body');

let timerChangeColor = null;

buttonStart.addEventListener('click', () => {
  timerChangeColor = setInterval(() => {
    bodyHtml.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.setAttribute('disabled', '');
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerChangeColor);
  buttonStart.removeAttribute('disabled', '');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
