const images = document.querySelectorAll('.image')

for (const image of images) {
  image.addEventListener('click', ()=> {
    clearActiveClasses();
    image.classList.add('active')
  })
}

function clearActiveClasses() {
  images.forEach(image => {
    image.classList.remove('active')
  });
}