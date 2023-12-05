const form = document.forms.signin__form;
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

const userId = localStorage.getItem('user_id');
if (userId) {
  welcomeBlock.classList.add('welcome_active');
  userIdSpan.textContent = userId;
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.addEventListener('load', () => {
    if (xhr.readyState = XMLHttpRequest.DONE) {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        localStorage.setItem('user_id', response.user_id);
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = response.user_id;
      } else {
        alert('Неверный логин/пароль');
      }
    }
  });
  xhr.send(formData);
});

// Удаление id тест
// localStorage.removeItem('user_id');