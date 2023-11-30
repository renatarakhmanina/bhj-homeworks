const tasklist = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');

function createTask(task) {
  tasklist.insertAdjacentHTML('beforeEnd', `<div class='task'><div class='task__title'>${task}</div><a href='#' class='task__remove'>&times;</a></div>`);
}

function removeTask(e) {
  if (e.target.classList.contains('task__remove')) {
    e.target.closest('.task').remove();
  }
}

input.addEventListener('keydown', (e) => {
  if (e.target.value && e.key === 'Enter') {
    e.preventDefault();
    createTask(e.target.value);
    input.value = '';
  }
});

tasklist.addEventListener('click', removeTask);