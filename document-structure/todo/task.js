const tasklist = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');
const addButton = document.querySelector('.tasks__add');

function createTask(task) {
  tasklist.insertAdjacentHTML('beforeEnd', `<div class='task'><div class='task__title'>${task}</div><a href='#' class='task__remove'>&times;</a></div>`);
}

function removeTask(e) {
  if (e.target.classList.contains('task__remove')) {
    e.target.closest('.task').remove();
  }
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    createTask(input.value);
  }
  input.value = '';
});

tasklist.addEventListener('click', removeTask);