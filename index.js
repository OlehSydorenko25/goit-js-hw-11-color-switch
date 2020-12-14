const startBtn = document.querySelector('[data-action="start"]');
const stopBnt = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const max = colors.length;

startBtn.addEventListener('click', selectColor)
stopBnt.addEventListener('click', stopSelectColor)

function selectColor() {
    intervalId = setInterval(() => {
        startBtn.disabled = true;
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, max)]
    }, 1000)
}

function stopSelectColor() {
    startBtn.disabled = false;
    clearInterval(intervalId)
}

