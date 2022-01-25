const upBut = document.querySelector('.up-but');
const downBut = document.querySelector('.down-but');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide')
const slidersCount = mainSlide.querySelectorAll('div').length
let activeSlide = 0;
const container = document.querySelector('section')
const height = container.clientHeight;


sidebar.style.top = `-${(slidersCount - 1)*100}vh`;

upBut.addEventListener('click', () => {
  changeSlide('up');
})

downBut.addEventListener('click', () => {
  changeSlide('down');
})

function changeSlide(direction) {
  if(direction === 'up') {
    activeSlide++;
    if(activeSlide === slidersCount) {
      activeSlide = 0;
    }
  } else if(direction === 'down') {
    activeSlide--;
    if(activeSlide < 0) {
      activeSlide = slidersCount - 1;
    }
  }

  
  mainSlide.style.transform = `translateY(-${activeSlide*100}vh)`;
  sidebar.style.transform = `translateY(${activeSlide*100}vh)`
}

