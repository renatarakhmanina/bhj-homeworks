const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (e) => {
    progress.value = (e.loaded / e.total) * 100;
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});
