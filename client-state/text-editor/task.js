const editor = document.getElementById('editor');
const button = document.createElement('button');
button.innerText = 'Очистить содержимое';
editor.parentElement.appendChild(button);

const storedText = localStorage.getItem('text');
if (storedText) {
  editor.value = storedText;
} 

editor.addEventListener('input', () => {
  localStorage.setItem('text', editor.value);
});

button.addEventListener('click', () => {
  editor.value = '';
  localStorage.clear();
});

