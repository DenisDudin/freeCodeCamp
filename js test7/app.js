const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const restart = document.querySelector('#restart')
const result = document.createElement('div');
let time = 0;
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
  interval = setInterval(decreaseTime, 1000);
  createCircle();
  setTime(time);
}

function decreaseTime() {
  if(time === 0) {
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
  clearInterval(interval);
  timeEl.parentNode.classList.add('hide');
  document.querySelector('#circle').remove();

  result.innerHTML = `<h2 id="score">Game score:<span class="primary">${score}</span></h2>`;
  board.prepend(result);

  restart.style.display = 'block'
}

restart.addEventListener('click', (e) => {
  e.preventDefault;
  restart.style.display = 'none'
  document.querySelector('#score').remove();
  screens[1].classList.remove('up');
  timeEl.parentNode.classList.remove('hide');
  score = 0;
})