const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const restart = document.querySelector('#restart')
let time = 1;
let k = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
  if(event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('date-time'))
    screens[1].classList.add('up');
    startGame()
  }
})

board.addEventListener('click', (e) => {
  if(e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createCircle();
  }
})

function startGame() {
  setInterval(decreaseTime, 1000);
  createCircle();
  setTime(time);
}

function decreaseTime() {
  if(time === 0 && k < 1) {
    k++;
    finishGame();
  } else {
    let current = --time;
    if(current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.id = 'circle';
  circle.remove();
  const sizeCircle = getRandomNumber(10,40);
  circle.style.width = `${sizeCircle}px`;
  circle.style.height = `${sizeCircle}px`

  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, width-sizeCircle);
  const y = getRandomNumber(0, height-sizeCircle);
  circle.style.top = `${x}px`;
  circle.style.left = `${y}px`;

  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max-min) + min)
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  let result = document.createElement('div');
  result.innerHTML = `<h2>Game score:<span class="primary">${score}</span></h2>`;
  board.prepend(result);
}

restart.addEventListener('click', (e) => {
  e.preventDefault;
  restart.style.display = 'none'
  screens[1].classList.remove('up');
  timeEl.parentNode.classList.remove('hide');
})