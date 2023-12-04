const loader = document.querySelector('.loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest;
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const obj = JSON.parse(xhr.responseText);
    items.innerHTML = '';
    for (const valuteCode in obj.response.Valute) {
      const valute = obj.response.Valute[valuteCode];

      function createItem(valute) {
        items.insertAdjacentHTML('beforeEnd', `<div class="item"><div class="item__code">${valute.CharCode}</div><div class="item__value">${valute.Value}</div><div class="item__currency">руб.</div></div>`);
      }
      createItem(valute);
      loader.classList.remove('loader_active');
    }
  };
});
xhr.send();
