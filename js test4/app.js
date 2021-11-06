const task = document.querySelector('.task ') 
const placeholders = document.querySelectorAll('.placeholder')

task.addEventListener('dragstart', dragstart)
task.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(e) { 
  e.target.classList.add('hold');
  setTimeout(()=>e.target.classList.add('hide'), 0)
}

function dragend(e) {
  e.target.className = 'task'
}

function dragover(e) {
  e.preventDefault()
}

function dragenter(e) {
  e.target.classList.add('hovered')
}

function dragleave(e) {
  e.target.classList.remove('hovered')
}

function dragdrop(e) {
  e.target.append(task)
  e.target.classList.remove('hovered')
}