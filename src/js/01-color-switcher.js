const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startColorChange() {
  startButton.disabled = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  startButton.disabled = false;
  clearInterval(intervalId);
}

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

