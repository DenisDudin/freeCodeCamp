const board = document.querySelector('#board');
const COLORS = ['#fa448c', '#fec859', '#43b5a0', '#491d88', '#cf0060', '#13a8fe', '#ffa300']
const CELL = 700;

for(let i=0; i<CELL; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(e) {
  const color = getRandomColor();
  e.style.backgroundColor = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = '0 0 2px rgb(70, 70, 70)'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * COLORS.length);

  return COLORS[index]
}